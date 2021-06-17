import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import Layout from '../components/layout'

SwiperCore.use([Autoplay, Navigation]);

export default function Home(props) {
  
  const { allTrending, movieTrending, tvTrending } = props

  // Get 3 Movie / Tv Show for Carousel
  const allTrendingMainCarousel = allTrending.filter( (items, index) => { return index <= 4 })

  return (
    <Layout title="Watchlist">
      <main className="container mx-auto">
        <Swiper 
          spaceBetween={30} 
          centeredSlides={true} 
          autoplay={{
            "delay": 2500,
            "disableOnInteraction": false }}           
          navigation={true} 
          className="mySwiper"
        >
          {allTrendingMainCarousel.map((items, index) => (
            <SwiperSlide key={index}>
              <div className="h-56 sm:h-96 lg:h-136">
                <img
                  className="w-full xl:-top-16"
                  src={`https://image.tmdb.org/t/p/original/${items.backdrop_path}`}
                  alt="Trending Carousel"
                />
                <Link href="">
                  <a className="bottom-0 left-0 absolute pl-5 pb-5 sm:pl-10 lg:pl-14 xl:pl-20 xl:pb-10 bg-gradient-to-t from-black via-truegray-900">
                    <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold mb-1 w-4/5">{items.media_type === "tv" ? items.name : items.title}</h1>
                    <p className="overflow-clip text-base sm:text-lg text-justify font-light h-7 sm:h-24 lg:h-auto w-4/5">{items.overview}</p>
                  </a>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="px-3 sm:px-5 xl:px-0">
          <Tabs>
            <div className="flex items-center">
              <h1 className="text-3xl py-5 mt-5 mr-3">Trending</h1>
              <TabList className="mt-7">
                <Tab><h1 className="text-base sm:text-lg">All</h1></Tab>
                <Tab><h1 className="text-base sm:text-lg">Movies</h1></Tab>
                <Tab><h1 className="text-base sm:text-lg">TV Shows</h1></Tab>
              </TabList>
            </div>

            <TabPanel>
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
                {allTrending.map((items, index) => (
                  <SwiperSlide key={index}>
                    <Link href="">
                      <a>
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`}
                          width="150"
                          height="225"
                          alt="all Trending Carousel"
                        />
                      </a>
                    </Link>
                    <Link href="">
                      <a>
                        <h1 className="mt-1 font-medium text-base sm:text-lg">{items.media_type === "tv" ? items.name : items.title}</h1>
                      </a>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </TabPanel>
            <TabPanel>
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
                {movieTrending.map((items, index) => (
                  <SwiperSlide key={index}>
                    <Link href="">
                      <a>
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`}
                          width="150"
                          height="225"
                          alt="all Trending Carousel"
                        />
                      </a>
                    </Link>
                    <Link href="">
                      <a>
                        <h1 className="mt-1 font-medium text-base sm:text-lg">{items.title}</h1>
                      </a>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </TabPanel>
            <TabPanel>
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
                {tvTrending.map((items, index) => (
                  <SwiperSlide key={index}>
                    <Link href="">
                      <a>
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`}
                          width="150"
                          height="225"
                          alt="all Trending Carousel"
                        />
                      </a>
                    </Link>
                    <Link href="">
                      <a>
                        <h1 className="mt-1 font-medium text-base sm:text-lg">{items.name}</h1>
                      </a>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </TabPanel>
          </Tabs>
        </div>

      </main>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allTrendingRes = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`)
  const allTrending = await allTrendingRes.json()

  const movieTrendingRes = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}`)
  const movieTrending = await movieTrendingRes.json()

  const tvTrendingRes = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.API_KEY}`)
  const tvTrending = await tvTrendingRes.json()

  return {
    props: {
      allTrending: allTrending.results,
      movieTrending: movieTrending.results,
      tvTrending: tvTrending.results
    }
  }
};
