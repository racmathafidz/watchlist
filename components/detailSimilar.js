import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper/core'

SwiperCore.use( Navigation )

export default function detailSimilar(props) {

    const { similarData, movie, tvShows } = props

    const imageLoader = ({ src }) => {
      return `https://image.tmdb.org/t/p/w500/${src}`
    }
   
    if (similarData.length >= 1) {

      if (movie === true) {
          return (
              <div className="containers px-3 sm:px-5 xl:px-0 mb-5">
                <h1 className="text-3xl py-5">Similar Like This</h1>
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
                  {similarData.map((items, index) => (
                    <SwiperSlide key={index}>                    
                      <Link 
                        href={`/movie/${items.id}`}
                        key={ items.id }
                      >
                        <a>
                          <Image
                            loader={imageLoader}
                            src={items.poster_path}
                            alt="similar movies"
                            width={150}
                            height={225}
                          />
                          <h1 className="mt-1 text-base sm:text-lg">{items.title}</h1>
                        </a>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
          )
      }
  
      if (tvShows === true) {
          return (
              <div className="containers px-3 sm:px-5 xl:px-0 mb-5">
                <h1 className="text-3xl py-5">Similar Like This</h1>
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
                  {similarData.map((items, index) => (
                    <SwiperSlide key={index}>                      
                      <Link 
                        href={`/tv/${items.id}`}
                        key={ items.id }
                      >
                        <a>
                          <Image
                            loader={imageLoader}
                            src={items.poster_path}
                            alt="similar tv show"
                            width={150}
                            height={225}
                          />
                          <h1 className="mt-1 text-base sm:text-lg">{items.name}</h1>
                        </a>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
          )
      }
    }

    return null

}
