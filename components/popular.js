import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper/core'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

SwiperCore.use( Navigation );

export default function Popular(props) {

    const { moviePopularData, tvPopularData, allPopular, moviePopularOnly, tvPopularOnly } = props

    const imageLoader = ({ src }) => {
      return `https://image.tmdb.org/t/p/w500/${src}`
    }

    if (allPopular === true) {
        return (
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
                    {moviePopularData.map((items, index) => (
                      <SwiperSlide key={index}>
                        <Link 
                          href={`/movie/${items.id}`}
                          key={ items.id }
                        >
                          <a>
                            <Image
                              loader={imageLoader}
                              src={items.poster_path}
                              alt="movie popular"
                              width={150}
                              height={225}
                            />                            
                          </a>
                        </Link>
                        <Link 
                          href={`/movie/${items.id}`}
                          key={ items.id }
                        >
                          <a>
                            <h1 className="mt-1 text-base sm:text-lg">{items.title}</h1>
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
                    {tvPopularData.map((items, index) => (
                      <SwiperSlide key={index}>
                        <Link 
                          href={`/tv/${items.id}`}
                          key={ items.id }
                        >
                          <a>
                            <Image
                              loader={imageLoader}
                              src={items.poster_path}
                              alt="tv popular"
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
                </TabPanel>
              </Tabs>
            </div>
        )
    }

    if (moviePopularOnly === true) {
        return (
            <div className="containers px-3 sm:px-5 xl:px-0">
                <h1 className="text-3xl py-5 mr-3">Popular</h1>

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
                {moviePopularData.map((items, index) => (
                    <SwiperSlide key={index}>
                    <Link 
                      href={`/movie/${items.id}`}
                      key={ items.id }
                    >
                        <a>
                          <Image
                            loader={imageLoader}
                            src={items.poster_path}
                            alt="movie popular"
                            width={150}
                            height={225}
                          /> 
                        </a>
                    </Link>
                    <Link 
                      href={`/movie/${items.id}`}
                      key={ items.id }
                    >
                        <a>
                        <h1 className="mt-1 text-base sm:text-lg">{items.title}</h1>
                        </a>
                    </Link>
                    </SwiperSlide>
                ))}
                </Swiper>            
            </div>
        )
    }

    if (tvPopularOnly === true) {
        return (
            <div className="containers px-3 sm:px-5 xl:px-0">
                <h1 className="text-3xl py-5 mr-3">Popular</h1>

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
                    {tvPopularData.map((items, index) => (
                      <SwiperSlide key={index}>
                        <Link 
                          href={`/tv/${items.id}`}
                          key={ items.id }
                        >
                          <a>
                            <Image
                              loader={imageLoader}
                              src={items.poster_path}
                              alt="tv popular"
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
}
