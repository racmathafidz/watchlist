/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable max-len */
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';

SwiperCore.use(Navigation);

export default function Trending(props) {
  const {
    allTrendingData, movieTrendingData, tvTrendingData, allTrending, movieTrendingOnly, tvTrendingOnly,
  } = props;

  const imageLoader = ({ src }) => `https://image.tmdb.org/t/p/w500/${src}`;

  if (allTrending === true) {
    return (
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
              {allTrendingData.map((items, index) => (
                <SwiperSlide key={index}>
                  <Link
                    href={items.media_type === 'tv' ? `/tv/${items.id}` : `/movie/${items.id}`}
                    key={items.id}
                  >
                    <a>
                      <Image
                        loader={imageLoader}
                        src={items.poster_path}
                        alt="all trending"
                        width={150}
                        height={225}
                      />
                    </a>
                  </Link>
                  <Link
                    href={items.media_type === 'tv' ? `/tv/${items.id}` : `/movie/${items.id}`}
                    key={items.id}
                  >
                    <a>
                      <h1 className="mt-1 text-base sm:text-lg">{items.media_type === 'tv' ? items.name : items.title}</h1>
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
              {movieTrendingData.map((items, index) => (
                <SwiperSlide key={index}>
                  <Link
                    href={`/movie/${items.id}`}
                    key={items.id}
                  >
                    <a>
                      <Image
                        loader={imageLoader}
                        src={items.poster_path}
                        alt="movie trending"
                        width={150}
                        height={225}
                      />
                    </a>
                  </Link>
                  <Link
                    href={`/movie/${items.id}`}
                    key={items.id}
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
              {tvTrendingData.map((items, index) => (
                <SwiperSlide key={index}>
                  <Link
                    href={`/tv/${items.id}`}
                    key={items.id}
                  >
                    <a>
                      <Image
                        loader={imageLoader}
                        src={items.poster_path}
                        alt="tv trending"
                        width={150}
                        height={225}
                      />
                    </a>
                  </Link>
                  <Link
                    href={`/tv/${items.id}`}
                    key={items.id}
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
    );
  }

  if (movieTrendingOnly === true) {
    return (
      <div className="containers px-3 sm:px-5 xl:px-0">
        <h1 className="text-3xl py-5 mt-5 mr-3">Trending</h1>

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
          {movieTrendingData.map((items, index) => (
            <SwiperSlide key={index}>
              <Link
                href={`/movie/${items.id}`}
                key={items.id}
              >
                <a>
                  <Image
                    loader={imageLoader}
                    src={items.poster_path}
                    alt="movie trending"
                    width={150}
                    height={225}
                  />
                </a>
              </Link>
              <Link
                href={`/movie/${items.id}`}
                key={items.id}
              >
                <a>
                  <h1 className="mt-1 text-base sm:text-lg">{items.title}</h1>
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }

  if (tvTrendingOnly === true) {
    return (
      <div className="containers px-3 sm:px-5 xl:px-0">
        <h1 className="text-3xl py-5 mt-5 mr-3">Trending</h1>

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
          {tvTrendingData.map((items, index) => (
            <SwiperSlide key={index}>
              <Link
                href={`/tv/${items.id}`}
                key={items.id}
              >
                <a>
                  <Image
                    loader={imageLoader}
                    src={items.poster_path}
                    alt="tv trending"
                    width={150}
                    height={225}
                  />
                </a>
              </Link>
              <Link
                href={`/tv/${items.id}`}
                key={items.id}
              >
                <a>
                  <h1 className="mt-1 text-base sm:text-lg">{items.name}</h1>
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
}
