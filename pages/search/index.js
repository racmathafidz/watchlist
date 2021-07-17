import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'

import BrandIcon from '../../components/brandIcon'

export default function Search() {
    let value
    const router = useRouter()    

    const [searchResults, setSearchResults] = useState([])

    useEffect(async ()=>{
        let results
        let filteredResults

        if(!router.isReady) return

        // Fetching results from previous page search keyword
        if (router.query.q !== undefined) {
            document.getElementById('searchForm').value = router.query.q   
            
            const response = await axios.get(`/api/search?q=${router.query.q}`)
            results = response.data.data.results
            
            filteredResults = await results.filter( items => {
                return items.media_type == "movie" || items.media_type == "tv" && items.backdrop_path !== null && items.poster_path !== null
            })
            
            setSearchResults(filteredResults) 
        }
        
        // Emptying search results when will unmount
        return () => {
            setSearchResults([]) 
        }

    }, [router.isReady]) // Only re-run the effect if router.isReady changes

    const imageLoader = ({ src }) => {
      if ( src === "/" ) {
          return 'https://image.freepik.com/free-vector/3d-realistic-illustration-open-movie-clapperboard-clapper-isolated-background_1441-1783.jpg'
      }
      return `https://image.tmdb.org/t/p/w500/${src}`
    }

    const handleSearchChange = async (event) => {
        let results
        let filteredResults
        const query = event.target.value                             

        if(query.length >= 3) {          

            const response = await axios.get(`/api/search?q=${query}`)
            results = response.data.data.results
            
            filteredResults = await results.filter( items => {
                return items.media_type == "movie" || items.media_type == "tv" && items.backdrop_path !== null && items.poster_path !== null
            })

            setSearchResults(filteredResults)            
            
        } else {                        
            setSearchResults([])            
        }
    }

    return (
        <div>
            <Head>
              <title>Search | Watchlist</title>              
              <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* For Desktop Ver. */}
            <div className="fixed z-50 bg-black hidden container mx-auto py-5 px-8 containers w-full xl:flex xl:flex-row justify-between">
                <BrandIcon/>

                <div className="flex flex-row items-center">
                    <Link href="/movie">
                        <a className="text-lg font-title ml-14 transform transition duration-300 hover:text-gray-300">Movies</a>
                    </Link>
                    <Link href="/tv">
                        <a className="text-lg font-title ml-10 transform transition duration-300 hover:text-gray-300">TV Shows</a>
                    </Link>
                </div>

                <div className="flex flex-grow justify-end items-center mt-1">
                    <button
                        className="focus:outline-none"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mr-4 xl:mr-2 transform transition duration-300 hover:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                        <div className="flex flex-col">                        
                            <input 
                                id="searchForm"
                                type="text" 
                                placeholder="Search" 
                                className="sm:w-72 xl:w-96 xl:mr-2 border-b border-truegray-800 text-lg font-title bg-black focus:outline-none" 
                                onChange={handleSearchChange}                                                            
                                value={value}
                            />                                                        
                        </div>                    
                </div>
            </div>

            {/* For Mobile Ver. */}
            <div className="fixed z-50 bg-black w-full flex xl:hidden border-b-2 border-truegray-800 px-3 py-2 sm:px-5 sm:py-4 lg:px-6 lg:py-4">
                <button 
                    type="button" 
                    onClick={() => router.back()}
                    className="focus:outline-none"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 lg:h-9 lg:w-9 text-truegray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </button>

                <input 
                    id="searchForm"
                    type="text" 
                    className="flex-grow w-64 rounded bg-truegray-900 px-2 sm:px-3 lg:px-4 sm:py-3 lg:py-4 ml-2 sm:ml-3 lg:text-lg focus:outline-none"
                    placeholder="Search"
                    onChange={handleSearchChange}                                                            
                    value={value}
                />
            </div>

            <ul className="xl:container xl:mx-auto xl:py-5 xl:py-5 px-3 xl:px-5 xl:px-0 xl:containers ">
                {searchResults.map( (items, index) => (
                    <li className="p-2">
                        <Link                                                 
                            href={`/${items.media_type}/${items.id}`}
                            key={ items.id }
                        >
                            <a className={`${index === 0 ? 'mt-14 sm:mt-24 xl:mt-20 ' : ''}flex items-center border border-truegray-900 hover:text-truegray-300 rounded-lg my-1`}>
                                <Image
                                  loader={imageLoader}
                                  src={items.poster_path === null ? "/" : items.poster_path}
                                  alt="poster"
                                  width={70}
                                  height={105}
                                />
                                <div className="ml-2 flex flex-col">
                                    <h1 className="lg:text-xl xl:text-base">
                                        {items.media_type === "tv" ? items.name : items.title}
                                    </h1>
                                    <p className="text-sm lg:text-lg xl:text-sm italic text-truegray-200">
                                        {items.media_type === "tv" ? "TV Series" : "Movie"}
                                    </p>
                                </div>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
