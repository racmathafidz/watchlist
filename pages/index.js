import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import Layout from '../components/layout'

SwiperCore.use([Autoplay, Navigation]);

export default function Home(props) {
  
  const { allTrending, movieTrending, tvTrending, moviePopular, tvPopular, movieInTheater, tvAiring } = props

  // Get 3 Movie / Tv Show for Carousel
  const allTrendingMainCarousel = allTrending.filter( (items, index) => { return index <= 4 })

  return (
    <Layout title="Watchlist">
      <main>
        <div className="containers">
          <Swiper 
            spaceBetween={30} 
            centeredSlides={true} 
            autoplay={{
              "delay": 3000,
              "disableOnInteraction": false }}           
            navigation={true} 
            className="mySwiper"
          >
            {allTrendingMainCarousel.map((items, index) => (
              <SwiperSlide key={index}>
                <div className="h-56 sm:h-96 lg:h-140">
                  <img
                    className="w-full xl:-top-16"
                    src={`https://image.tmdb.org/t/p/original/${items.backdrop_path}`}
                    alt="Trending Carousel"
                  />
                  <Link href="">
                    <a className="bottom-0 left-0 absolute pl-5 pb-5 sm:pl-10 lg:pl-14 xl:pl-20 xl:pb-10 bg-gradient-to-t from-black via-truegray-900">
                      <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold mb-1 w-4/5">{items.media_type === "tv" ? items.name : items.title}</h1>
                      <p className="text-base sm:text-lg text-justify font-light h-7 sm:h-24 lg:h-auto w-4/5">{items.overview}</p>
                    </a>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="containers px-3 sm:px-5 xl:px-0">
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
                          alt="movie Trending Carousel"
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
                          alt="tv Trending Carousel"
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

        <div className="containers px-3 sm:px-5 xl:px-0">
          <Tabs>
            <div className="flex items-center">
              <h1 className="text-3xl py-5 mr-3">Popular</h1>
              <TabList className="mt-2">
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
                {moviePopular.map((items, index) => (
                  <SwiperSlide key={index}>
                    <Link href="">
                      <a>
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`}
                          width="150"
                          height="225"
                          alt="movie popular Carousel"
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
                {tvPopular.map((items, index) => (
                  <SwiperSlide key={index}>
                    <Link href="">
                      <a>
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`}
                          width="150"
                          height="225"
                          alt="tv popular Carousel"
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

        <div className="containers px-3 sm:px-5 xl:px-0">
          <h1 className="text-3xl py-5">Movies In Theaters</h1>
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
            {movieInTheater.map((items, index) => (
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
                    <h1 className="mt-1 font-medium text-base sm:text-lg">{items.title}</h1>
                  </a>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

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
            {tvAiring.map((items, index) => (
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
                    <h1 className="mt-1 font-medium text-base sm:text-lg">{items.name}</h1>
                  </a>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-full h-56 sm:h-96 lg:h-120">
          <img
            className="w-48 sm:w-96 lg:w-108 xl:w-180 h-56 sm:h-96 lg:h-120 object-center object-cover z-0"
            src={`https://image.tmdb.org/t/p/original/${allTrending[0].backdrop_path}`}
            alt="closing word"
            align="right"
          />
          <div className="flex items-center z-10 absolute w-full h-56 sm:h-96 lg:h-120 bg-gradient-to-r from-black via-black">
            <div className="w-1/2 my-auto italic text-gray-100 text-center text-base sm:text-2xl lg:text-3xl font-extralight pb-20">
              "Sit back, relax, and enjoy the show" <br/>- Watchlist Team
            </div>
          </div>
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

  const moviePopularRes = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const moviePopular = await moviePopularRes.json()

  const tvPopularRes = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const tvPopular = await tvPopularRes.json()

  const movieInTheaterRes = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const movieInTheater = await movieInTheaterRes.json()

  const tvAiringRes = await fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const tvAiring = await tvAiringRes.json()

  return {
    props: {
      allTrending: allTrending.results,
      movieTrending: movieTrending.results,
      tvTrending: tvTrending.results,
      moviePopular: moviePopular.results,
      tvPopular: tvPopular.results,
      movieInTheater: movieInTheater.results,
      tvAiring: tvAiring.results,
    }
  }
};
