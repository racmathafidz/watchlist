import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper/core'

SwiperCore.use( Navigation );

export default function tvSeasonList({ detailData }) {    

    const imageLoader = ({ src }) => {
      if ( src === "/" ) {
          return 'https://image.freepik.com/free-vector/3d-realistic-illustration-open-movie-clapperboard-clapper-isolated-background_1441-1783.jpg'
      }
      return `https://image.tmdb.org/t/p/w500/${src}`
    }

    if (detailData.length >= 2) {
        return (
            <div className="containers px-3 sm:px-5 xl:px-0">
              <h1 className="text-3xl py-5">Seasons List</h1>
              <Swiper 
                slidesPerView={1} 
                spaceBetween={10} 
                navigation={true}
                breakpoints={{
                "320": {
                  "slidesPerView": 3,
                  "spaceBetween": 10
                },
                "640": {
                  "slidesPerView": 4,
                  "spaceBetween": 10
                },
                "1024": {
                  "slidesPerView": 5,
                  "spaceBetween": 60
                },
                "1280": {
                  "slidesPerView": 6,
                  "spaceBetween": 80
                }
                }} 
                className="mySwiper"
              >
                {detailData.map((items, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      loader={imageLoader}
                      src={items.poster_path === null ? "/" : items.poster_path}
                      alt="poster"
                      width={150}
                      height={225}
                    />
                    <h1 className="mt-1 text-base sm:text-lg">{items.name}</h1>
                    <h1 className="mt-1 text-sm sm:text-base text-gray-300 mb-5">{items.air_date === null ? "-" : items.air_date.substring(0,4)}</h1>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
        )
    }

    return null
}
