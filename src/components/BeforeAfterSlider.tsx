import { useEffect, useRef, useState } from 'react';

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  altBefore?: string;
  altAfter?: string;
  initialPosition?: number; // 0..100
  className?: string;
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

const BeforeAfterSlider = ({
  beforeSrc,
  afterSrc,
  altBefore = 'Prima',
  altAfter = 'Dopo',
  initialPosition = 50,
  className = '',
}: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(clamp(initialPosition, 0, 100));
  const [isDragging, setIsDragging] = useState(false);
  const [beforeLoaded, setBeforeLoaded] = useState(true);
  const [afterLoaded, setAfterLoaded] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setPosition(clamp(initialPosition, 0, 100));
  }, [initialPosition]);

  // Global listeners to ensure drag stops on pointer up anywhere
  useEffect(() => {
    if (!isDragging) return;
    const handleWindowPointerMove = (event: PointerEvent) => {
      event.preventDefault();
      updatePositionFromClientX(event.clientX);
    };
    const handleWindowPointerUp = (event: PointerEvent) => {
      event.preventDefault();
      setIsDragging(false);
    };
    window.addEventListener('pointermove', handleWindowPointerMove, { passive: false });
    window.addEventListener('pointerup', handleWindowPointerUp, { passive: false });
    window.addEventListener('pointercancel', handleWindowPointerUp, { passive: false });
    return () => {
      window.removeEventListener('pointermove', handleWindowPointerMove as any);
      window.removeEventListener('pointerup', handleWindowPointerUp as any);
      window.removeEventListener('pointercancel', handleWindowPointerUp as any);
    };
  }, [isDragging]);

  const updatePositionFromClientX = (clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clamp(clientX - rect.left, 0, rect.width);
    const pct = (x / rect.width) * 100;
    setPosition(pct);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const target = e.currentTarget as HTMLDivElement;
    (target as any).setPointerCapture?.(e.pointerId);
    setIsDragging(true);
    updatePositionFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    e.stopPropagation();
    updatePositionFromClientX(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const target = e.currentTarget as HTMLDivElement;
    (target as any).releasePointerCapture?.(e.pointerId);
    setIsDragging(false);
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  return (
    <div className={`w-full ${className}`}>
      <div
        ref={containerRef}
        className={`relative w-full overflow-hidden select-none rounded-lg ${isDragging ? 'cursor-col-resize' : 'cursor-ew-resize'}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        onPointerLeave={handlePointerLeave}
        style={{ touchAction: 'none' }}
      >
        {/* Base layer: BEFORE */}
        <div className="relative w-full h-full">
          <div className="aspect-[4/3] md:aspect-[16/9] w-full h-full">
            <img
              src={beforeSrc}
              alt={altBefore}
              className="w-full h-full object-cover block"
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              onError={(e) => {
                setBeforeLoaded(false);
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
            {!beforeLoaded && (
              <div className="w-full h-full bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-red-500 text-sm font-semibold uppercase tracking-wider">Prima</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Overlay layer: AFTER, clipped by position */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <div className="aspect-[4/3] md:aspect-[16/9] w-full h-full">
            <img
              src={afterSrc}
              alt={altAfter}
              className="w-full h-full object-cover block"
              draggable={false}
              onDragStart={(e) => e.preventDefault()}
              onError={(e) => {
                setAfterLoaded(false);
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
            {!afterLoaded && (
              <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-green-600 text-sm font-semibold uppercase tracking-wider">Dopo</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Divider & handle */}
        <div
          className="absolute inset-y-0 flex items-center"
          style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
        >
          <div className="w-px h-[85%] bg-white/80 shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"></div>
          <div className="absolute -translate-x-1/2 left-1/2">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center">
              <div className="w-1.5 h-4 bg-slate-400 mx-0.5"></div>
              <div className="w-1.5 h-4 bg-slate-400 mx-0.5"></div>
              <div className="w-1.5 h-4 bg-slate-400 mx-0.5"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Range rimosso come richiesto */}
    </div>
  );
};

export default BeforeAfterSlider;



