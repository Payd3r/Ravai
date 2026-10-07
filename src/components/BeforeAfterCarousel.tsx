import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BeforeAfterSlider from './BeforeAfterSlider';

export interface BeforeAfterItem {
  before: string;
  after: string;
  title?: string;
}

interface BeforeAfterCarouselProps {
  items: BeforeAfterItem[];
}

const BeforeAfterCarousel = ({ items }: BeforeAfterCarouselProps) => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={24}
        slidesPerView={1}
        allowTouchMove={false}
        simulateTouch={false}
        noSwiping={true as unknown as undefined}
        noSwipingClass="no-swipe"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="mb-4"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="no-swipe">
            <div className="bg-white rounded-lg  overflow-hidden">
              {item.title && (
                <div className="text-center mb-3">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">{item.title}</h3>
                </div>
              )}
              <BeforeAfterSlider
                beforeSrc={item.before}
                afterSrc={item.after}
                initialPosition={50}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {items.map((item, index) => (
          <button
            key={index}
            type="button"
            onClick={() => swiperRef.current?.slideTo(index)}
            className={`relative rounded-md overflow-hidden border transition-all focus:outline-none focus:ring-2 focus:ring-slate-900 ${
              activeIndex === index ? 'border-slate-900 ring-1 ring-slate-900' : 'border-slate-200'
            }`}
            aria-label={`Vai alla slide ${index + 1}${item.title ? `: ${item.title}` : ''}`}
          >
            <div className="relative aspect-[7/3]">
              <div className="absolute top-5 left-[50%] -translate-x-1/2 -translate-y-1/2 z-10 px-2 py-0.5 rounded bg-black/60 text-white text-xs font-semibold">
                {index + 1}
              </div>
              <img
                src={item.after}
                alt={item.title || `Dopo ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                  const fallback = (e.currentTarget.nextElementSibling as HTMLElement) || null;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="hidden items-center justify-center w-full h-full bg-slate-100 text-slate-500 text-sm">Anteprima</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BeforeAfterCarousel;



