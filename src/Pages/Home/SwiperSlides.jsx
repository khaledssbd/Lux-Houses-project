import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// npm i swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import PropTypes from 'prop-types';
import 'swiper/css/effect-coverflow';

const SwiperSlides = ({ allHouses }) => {
  return (
    <div>
      <h4
        className="text-[#131313] font-play text-xl md:text-3xl font-medium mb-3 md:mb-8"
        data-aos="zoom-out"
      >
        Swiper Slides with pagination
      </h4>
      <div className="swiper-wrapper mb-20">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 1 }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={5}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {allHouses.map((house, i) => (
            <SwiperSlide key={i}>
              <img
                src={house.image}
                className="rounded-2xl px-1"
                alt={house.estate_title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperSlides;
SwiperSlides.propTypes = {
  allHouses: PropTypes.array.isRequired,
};
