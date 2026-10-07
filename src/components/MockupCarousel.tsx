import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { projectDetails } from '../data/projectDetails';

interface MockupCarouselProps {
  projectTitle: string;
  projectId: string;
}

const MockupCarousel = ({ projectTitle, projectId }: MockupCarouselProps) => {
  // Ottieni le immagini mockup dal projectDetails
  const projectDetail = projectDetails[projectId];
  const mockupImages = projectDetail?.mockups || [];

  return (
    <div className="relative shadow-lg">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        className="mockup-carousel"
      >
        {mockupImages.map((mockup, index) => (
          <SwiperSlide key={index} className="shadow-lg overflow-hidden">
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="aspect-[29/30] relative">
                <img 
                  src={mockup}
                  alt={`${projectTitle} mockup ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback se l'immagine non carica
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                {/* Fallback che si mostra solo se l'immagine non carica */}
                <div className="w-full h-full bg-gradient-to-br from-slate-100 to-blue-50 flex items-center justify-center hidden">
                  <div className="text-center">
                    <div className="text-slate-900 text-6xl font-bold mb-2">
                      {projectTitle.charAt(0)}
                    </div>
                    <p className="text-slate-700 font-medium">Mockup {index + 1}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MockupCarousel; 