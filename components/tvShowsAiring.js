import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper/core'

SwiperCore.use( Navigation );

export default function TvShowsAiring(props) {

    const { tvShowsAiringData } = props

    const imageLoader = ({ src }) => {
      return `https://image.tmdb.org/t/p/w500/${src}`
    }

    return (
        <div className="containers px-3 sm:px-5 xl:px-0">
          <h1 className="text-3xl py-5">Airing TV Shows</h1>
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
            {tvShowsAiringData.map((items, index) => (
              <SwiperSlide key={index}>
                <Link 
                  href={`/tv/${items.id}`}
                  key={ items.id }
                >
                  <a>
                    <Image
                      loader={imageLoader}
                      src={items.poster_path}
                      alt="airing tv shows"
                      width={150}
                      height={225}
                    />                 
                  </a>
                </Link>
                <Link 
                  href={`/tv/${items.id}`}
                  key={ items.id }
                >
                  <a>
                    <h1 className="mt-1 text-base sm:text-lg">{items.name}</h1>
                  </a>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    )
}
