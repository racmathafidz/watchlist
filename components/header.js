import { useState } from 'react'
import { Transition } from '@headlessui/react'
import BrandIcon from './brandIcon'
import Link from 'next/link'

export default function Header() {
    const [searchBarIsShown, setSearchBarIsShown] = useState(false)
    const [collapseNavbar, setCollapseNavbar] = useState(false)

    const searchButtonHandle = () => {
        setSearchBarIsShown(!searchBarIsShown)
    }

    const mobileSearchButtonHandle = () => {
        console.log("Search")
    }

    const collapseNavbarHandle = () => {
        setCollapseNavbar(!collapseNavbar)
    }

    return (
        <header className="flex flex-col sm:flex-row w-full items-center container mx-auto px-4 py-3 sm:p-5 justify-between sm:justify-start">
            <div className="w-full sm:w-auto flex justify-between">
                <BrandIcon/>

                <button
                    className="sm:hidden focus:outline-none"
                    onClick={collapseNavbarHandle}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path className={`${collapseNavbar ? "hidden" : "block"}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    <path className={`${collapseNavbar ? "block" : "hidden"}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div className="hidden w-full sm:flex sm:flex-row">
                <div className="flex flex-row items-center">
                    <Link href="/movies">
                        <a className="text-lg font-title ml-14 transform transition duration-300 hover:text-gray-300">Movies</a>
                    </Link>
                    <Link href="/tv">
                        <a className="text-lg font-title ml-10 transform transition duration-300 hover:text-gray-300">TV Shows</a>
                    </Link>
                </div>

                {/** For Desktop Ver. */}
                <div className="flex flex-grow justify-end items-center mt-1">
                    <button
                        className="focus:outline-none"
                        onClick={searchButtonHandle}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white mr-4 transform transition duration-300 hover:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                        <input type="text" placeholder="Search" className="w-52 text-lg font-title bg-black focus:outline-none" />
                    </Transition>
                </div>
            </div>

            {/** For Mobile Ver. */}
            <Transition
                show={collapseNavbar}
                enter="transition-opacity ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="sm:hidden w-full flex flex-col items-center mt-14 border-b border-gray-800"
            >
                <Link href="/movies">
                    <a className="text-lg font-title mb-2 transform transition duration-300 hover:text-gray-300">Movies</a>
                </Link>
                <Link href="/tv">
                    <a className="text-lg font-title mb-10 transform transition duration-300 hover:text-gray-300">TV Shows</a>
                </Link>
                <div className="items-center mb-14">
                    <input type="text" placeholder="Search" className="w-48 text-lg font-title bg-black focus:outline-none" />
                    <button
                        className="focus:outline-none"
                        onClick={mobileSearchButtonHandle}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white transform transition duration-300 hover:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </Transition>
        </header>
    )
}
