/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Transition } from '@headlessui/react';
import axios from 'axios';

import BrandIcon from './brandIcon';

export default function Header() {
  let value;
  const router = useRouter();
  const searchRef = useRef(null);
  const [searchBarIsShown, setSearchBarIsShown] = useState(false);
  const [collapseNavbar, setCollapseNavbar] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchActive, setSearchActive] = useState(false);

  const searchButtonHandle = () => {
    setSearchBarIsShown(!searchBarIsShown);
    setSearchResults([]);
  };

  const collapseNavbarHandle = () => {
    setCollapseNavbar(!collapseNavbar);
  };

  const isActiveLink = (href) => (router.asPath === href ? 'active-link' : '');

  const imageLoader = ({ src }) => {
    if (src === '/') {
      return 'https://image.freepik.com/free-vector/3d-realistic-illustration-open-movie-clapperboard-clapper-isolated-background_1441-1783.jpg';
    }
    return `https://image.tmdb.org/t/p/w500/${src}`;
  };

  const onClick = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchResults([]);
      setSearchActive(false);
      window.removeEventListener('click', onClick);
    }
  };

  const handleSearchFetch = async (query) => {
    const response = await axios.get(`/api/search?q=${query}`);
    const { results } = response.data.data;

    // eslint-disable-next-line no-mixed-operators
    const filteredResults = await results.filter((items) => items.media_type === 'movie' || items.media_type === 'tv' && items.backdrop_path !== null && items.poster_path !== null);

    setSearchResults(filteredResults);
  };

  const handleSearchChange = async (event) => {
    if (event.target.value.length >= 3) {
      setSearchActive(true);

      handleSearchFetch(event.target.value);

      // Add Event Click Listener
      window.addEventListener('click', onClick);

      // Add Event Enter Listener
      document.addEventListener('keyup', async (event) => {
        if (event.key === 'Enter') {
          router.push({
            pathname: '/search',
            query: { q: event.target.value },
          });

          setSearchResults([]);

          handleSearchFetch(event.target.value);
        }
      });
    } else {
      setSearchActive(false);
    }
  };

  return (
    <header className="flex flex-col sm:flex-row w-full items-center container mx-auto py-3 sm:py-5 xl:py-5 px-3 sm:px-5 xl:px-0 containers justify-between sm:justify-start">

      {/* For Mobile Ver. */}
      <div className="z-50 w-full xl:hidden flex justify-between items-center">
        <button
          type="button"
          className="focus:outline-none"
          onClick={collapseNavbarHandle}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path className={`${collapseNavbar ? 'hidden' : 'block'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            <path className={`${collapseNavbar ? 'block' : 'hidden'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <BrandIcon />

        <Link href="/search">
          <a>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white mr-1 transform transition duration-300 hover:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </a>
        </Link>

      </div>

      <Transition
        show={collapseNavbar}
        enter="transition-opacity ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="absolute z-40 w-screen left-0"
      >
        <ul className="absolute z-40 bg-black w-full left-0 h-screen flex flex-col items-center pt-40 sm:pt-48 border-b border-gray-800">
          <li className="mb-2 sm:mb-3">
            <Link href="/movie">
              <a className={`${isActiveLink('/movie')} text-2xl sm:text-3xl lg:text-4xl font-title transform transition duration-300 hover:text-gray-300`}>Movies</a>
            </Link>
          </li>
          <li>
            <Link href="/tv">
              <a className={`${isActiveLink('/tv')} text-2xl sm:text-3xl lg:text-4xl font-title transform transition duration-300 hover:text-gray-300`}>TV Shows</a>
            </Link>
          </li>
        </ul>
      </Transition>

      {/** For Desktop Ver. */}
      <div className="hidden w-full xl:flex justify-between">
        <BrandIcon />

        <div className="flex flex-row items-center">
          <Link href="/movie">
            <a className={`${isActiveLink('/movie')} text-lg font-title ml-14 transform transition duration-300 hover:text-gray-300`}>Movies</a>
          </Link>
          <Link href="/tv">
            <a className={`${isActiveLink('/tv')} text-lg font-title ml-10 transform transition duration-300 hover:text-gray-300`}>TV Shows</a>
          </Link>
        </div>

        <div className="flex flex-grow justify-end items-center mt-1" ref={searchRef}>
          <button
            className="focus:outline-none"
            onClick={searchButtonHandle}
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mr-4 xl:mr-2 transform transition duration-300 hover:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <Transition
            show={searchBarIsShown}
            enter="transition-opacity ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Search"
                className="w-68 mr-4 text-lg font-title bg-black focus:outline-none"
                onChange={handleSearchChange}
                value={value}
              />
              {
                                searchActive && searchResults !== undefined && (
                                <ul className="w-68 mr-4 bg-black font-title absolute z-50 mt-9 border border-truegray-800 rounded">
                                  {searchResults.map((items) => (
                                    <li className="p-2 border-b border-truegray-700 hover:text-truegray-300">
                                      <Link
                                        href={`/${items.media_type}/${items.id}`}
                                        key={items.id}
                                      >
                                        <a className="flex items-center">
                                          <Image
                                            loader={imageLoader}
                                            src={items.poster_path === null ? '/' : items.poster_path}
                                            alt="poster"
                                            width={30}
                                            height={45}
                                          />
                                          <div className="ml-2 flex flex-col">
                                            <h1 className="text-base">
                                              {items.media_type === 'tv' ? items.name : items.title}
                                            </h1>
                                            <p className="text-sm italic text-truegray-200">
                                              {items.media_type === 'tv' ? 'TV Series' : 'Movie'}
                                            </p>
                                          </div>
                                        </a>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                                )
                            }
            </div>
          </Transition>
        </div>
      </div>

    </header>
  );
}
