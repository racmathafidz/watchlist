import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper/core'

SwiperCore.use( Navigation );

export default function tvByGenre(props) {

    const { actionData, comedyData, dramaData, animationData } = props

    return (
        <div className="containers px-3 sm:px-5 xl:px-0">
          <h1 className="text-3xl py-5">Action</h1>
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
            {actionData.map((items, index) => (
              <SwiperSlide key={index}>
                <Link href="">
                  <a>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`}
                      width="150"
                      height="225"
                      alt="movies in theaters"
                    />
                  </a>
                </Link>
                <Link href="">
                  <a>
                    <h1 className="mt-1 text-base sm:text-lg">{items.name}</h1>
                  </a>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <h1 className="text-3xl py-5">Comedy</h1>
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
            {comedyData.map((items, index) => (
              <SwiperSlide key={index}>
                <Link href="">
                  <a>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`}
                      width="150"
                      height="225"
                      alt="movies in theaters"
                    />
                  </a>
                </Link>
                <Link href="">
                  <a>
                    <h1 className="mt-1 text-base sm:text-lg">{items.name}</h1>
                  </a>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <h1 className="text-3xl py-5">Drama</h1>
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
            {dramaData.map((items, index) => (
              <SwiperSlide key={index}>
                <Link href="">
                  <a>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`}
                      width="150"
                      height="225"
                      alt="movies in theaters"
                    />
                  </a>
                </Link>
                <Link href="">
                  <a>
                    <h1 className="mt-1 text-base sm:text-lg">{items.name}</h1>
                  </a>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <h1 className="text-3xl py-5">Animation</h1>
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
            {animationData.map((items, index) => (
              <SwiperSlide key={index}>
                <Link href="">
                  <a>
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`}
                      width="150"
                      height="225"
                      alt="movies in theaters"
                    />
                  </a>
                </Link>
                <Link href="">
                  <a>
                    <h1 className="mt-1 mb-10 text-base sm:text-lg">{items.name}</h1>
                  </a>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    )
}
