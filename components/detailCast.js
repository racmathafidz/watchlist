/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';

SwiperCore.use(Navigation);

export default function detailCast({ castData }) {
  const imageLoader = ({ src }) => `https://image.tmdb.org/t/p/w500/${src}`;

  if (castData.length >= 1) {
    return (
      <div className="containers px-3 sm:px-5 xl:px-0">
        <h1 className="text-3xl py-5">Cast</h1>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation
          breakpoints={{
            320: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 60,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 80,
            },
          }}
          className="mySwiper"
        >
          {castData.map((items, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <SwiperSlide key={index}>
              <Image
                loader={imageLoader}
                src={items.profile_path}
                alt="cast"
                width={150}
                height={225}
              />
              <h1 className="mt-1 text-base sm:text-lg">{items.name}</h1>
              <h1 className="mt-1 text-sm sm:text-base text-gray-300 mb-5">{items.character}</h1>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }

  return null;
}
