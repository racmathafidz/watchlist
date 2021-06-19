import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper/core'

SwiperCore.use( Navigation );

export default function movieByGenre(props) {

    const { actionData, comedyData, horrorData, romanceData } = props

    const imageLoader = ({ src }) => {
      return `https://image.tmdb.org/t/p/w500/${src}`
    }

    return (
        <div className="containers px-3 sm:px-5 xl:px-0">
          <h1 className="text-3xl py-5">Get In On the Action</h1>
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
                    <Image
                      loader={imageLoader}
                      src={items.poster_path}
                      alt="action movies"
                      width={150}
                      height={225}
                    />
                  </a>
                </Link>
                <Link href="">
                  <a>
                    <h1 className="mt-1 text-base sm:text-lg">{items.title}</h1>
                  </a>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <h1 className="text-3xl py-5">Get Laugh</h1>
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
                    <Image
                      loader={imageLoader}
                      src={items.poster_path}
                      alt="comedy movies"
                      width={150}
                      height={225}
                    />
                  </a>
                </Link>
                <Link href="">
                  <a>
                    <h1 className="mt-1 text-base sm:text-lg">{items.title}</h1>
                  </a>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <h1 className="text-3xl py-5">The Horror</h1>
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
            {horrorData.map((items, index) => (
              <SwiperSlide key={index}>
                <Link href="">
                  <a>
                    <Image
                      loader={imageLoader}
                      src={items.poster_path}
                      alt="horror movies"
                      width={150}
                      height={225}
                    />
                  </a>
                </Link>
                <Link href="">
                  <a>
                    <h1 className="mt-1 text-base sm:text-lg">{items.title}</h1>
                  </a>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          <h1 className="text-3xl py-5">Romantic Movies</h1>
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
            {romanceData.map((items, index) => (
              <SwiperSlide key={index}>
                <Link href="">
                  <a>
                    <Image
                      loader={imageLoader}
                      src={items.poster_path}
                      alt="romance movies"
                      width={150}
                      height={225}
                    />
                  </a>
                </Link>
                <Link href="">
                  <a>
                    <h1 className="mt-1 mb-10 text-base sm:text-lg">{items.title}</h1>
                  </a>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    )
}
