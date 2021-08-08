import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation } from 'swiper/core'

SwiperCore.use([Autoplay, Navigation]);

export default function TrendingSlide(props) {

    const { allTrendingData, movieTrendingData, tvTrendingData, allTrending, movieTrendingOnly, tvTrendingOnly } = props

    if (allTrending === true) {
        return (
            <div className="w-full">
              <Swiper 
                spaceBetween={30} 
                centeredSlides={true} 
                autoplay={{
                  "delay": 3000,
                  "disableOnInteraction": false }}           
                navigation={true} 
                className="mySwiper"
              >
                {allTrendingData.map((items, index) => (
                  <SwiperSlide key={index}>
                    <div className="h-56 sm:h-96 lg:h-144">
                      <img
                        className="w-full xl:h-144 object-top object-cover"
                        src={`https://image.tmdb.org/t/p/original/${items.backdrop_path}`}
                        alt="Trending Carousel"
                      />
                      <Link 
                        href={items.media_type === "tv" ? `/tv/${items.id}` : `/movie/${items.id}`}
                        key={ items.id }
                      >
                        <a className="bottom-0 left-0 absolute pl-5 pb-5 sm:pl-10 lg:pl-14 xl:pl-20 xl:pb-10 bg-gradient-to-t from-black via-truegray-900">
                          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold mb-1 w-4/5">{items.media_type === "tv" ? items.name : items.title}</h1>
                          <p className="font-description text-base sm:text-lg text-justify font-light h-7 sm:h-24 lg:h-auto w-4/5">{items.overview}</p>
                        </a>
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
        )
    }

    if (movieTrendingOnly === true) {
        return (
            <div className="w-full">
              <Swiper 
                spaceBetween={30} 
                centeredSlides={true} 
                autoplay={{
                  "delay": 3000,
                  "disableOnInteraction": false }}           
                navigation={true} 
                className="mySwiper"
              >
                {movieTrendingData.map((items, index) => (
                  <SwiperSlide key={index}>
                    <div className="h-56 sm:h-96 lg:h-144">
                      <img
                        className="w-full xl:h-144 object-top object-cover"
                        src={`https://image.tmdb.org/t/p/original/${items.backdrop_path}`}
                        alt="Trending Carousel"
                      />
                      <Link 
                        href={`/movie/${items.id}`}
                        key={ items.id }
                      >
                        <a className="bottom-0 left-0 absolute pl-5 pb-5 sm:pl-10 lg:pl-14 xl:pl-20 xl:pb-10 bg-gradient-to-t from-black via-truegray-900">
                          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold mb-1 w-4/5">{items.media_type === "tv" ? items.name : items.title}</h1>
                          <p className="font-description text-base sm:text-lg text-justify font-light h-7 sm:h-24 lg:h-auto w-4/5">{items.overview}</p>
                        </a>
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
        )
    }

    if (tvTrendingOnly === true) {
        return (
            <div className="w-full">
              <Swiper 
                spaceBetween={30} 
                centeredSlides={true} 
                autoplay={{
                  "delay": 3000,
                  "disableOnInteraction": false }}           
                navigation={true} 
                className="mySwiper"
              >
                {tvTrendingData.map((items, index) => (
                  <SwiperSlide key={index}>
                    <div className="h-56 sm:h-96 lg:h-144">
                      <img
                        className="w-full xl:h-144 object-top object-cover"
                        src={`https://image.tmdb.org/t/p/original/${items.backdrop_path}`}
                        alt="Trending Carousel"
                      />
                      <Link 
                        href={`/tv/${items.id}`}
                        key={ items.id }
                      >
                        <a className="bottom-0 left-0 absolute pl-5 pb-5 sm:pl-10 lg:pl-14 xl:pl-20 xl:pb-10 bg-gradient-to-t from-black via-truegray-900">
                          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold mb-1 w-4/5">{items.media_type === "tv" ? items.name : items.title}</h1>
                          <p className="font-description text-base sm:text-lg text-justify font-light h-7 sm:h-24 lg:h-auto w-4/5">{items.overview}</p>
                        </a>
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
        )
    }
}
