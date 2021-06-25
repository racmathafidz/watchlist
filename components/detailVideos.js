import { Fragment, useState, useRef } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper/core'
import { Dialog, Transition } from '@headlessui/react'

SwiperCore.use( Navigation )

export default function detailVideos({ videoData }) {        

    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

    const [youtubeKey, setYoutubeKey] = useState("")

    const [youtubeTitle, setYoutubeTitle] = useState("")

    const closeModalRef = useRef(null)

    const openModal = (key, title) => {
      setIsVideoModalOpen(true)
      setYoutubeKey(key)
      setYoutubeTitle(title)
    }

    const closeModal = () => {
      setIsVideoModalOpen(false)
    }

    const videoThumbnailLoader = ({ src }) => {        
      return `https://img.youtube.com/vi/${src}/maxresdefault.jpg`
    }

    if (videoData.length >= 1) {  
      return (
          <div className="containers px-3 sm:px-5 xl:px-0">
              <h1 className="text-3xl py-5">Videos</h1>
              <Swiper 
                slidesPerView={1} 
                spaceBetween={10} 
                navigation={true}
                breakpoints={{
                "320": {
                  "slidesPerView": 1,
                  "spaceBetween": 10
                },
                "640": {
                  "slidesPerView": 2,
                  "spaceBetween": 10
                },
                "1024": {
                  "slidesPerView": 3,
                  "spaceBetween": 10
                }
                }} 
                className="mySwiper"
              >
                  {videoData.map( (items, index) => (
                      <SwiperSlide key={index}>
                        <button
                          type="button"
                          className=""
                          onClick={() => openModal(items.key, items.name)}
                        >
                          <Image
                            loader={videoThumbnailLoader}
                            src={items.key}
                            alt="videos thumbnail"
                            width={640}
                            height={360}
                          />
                          <h1 className="mt-1 sm:text-sm lg:text-base mb-5">{items.name}</h1>
                        </button>

                      </SwiperSlide>      
                  ))}
              </Swiper>  

              <Transition show={isVideoModalOpen} as={Fragment}>
                <Dialog
                  as="div"
                  className="fixed inset-0 z-10 overflow-y-auto"
                  onClose={closeModal}
                  initialFocus={closeModalRef}
                >
                  <div className="min-h-screen text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Dialog.Overlay className="fixed inset-0 bg-black opacity-90" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                      className="inline-block h-screen align-middle"
                      aria-hidden="true"
                    >
                      &#8203;
                    </span>
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <div className="inline-block w-full max-w-2xl px-4 overflow-hidden text-left align-middle transition-all transform bg-transparent shadow-xl rounded-2xl">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6"
                        >
                          {youtubeTitle}
                        </Dialog.Title>
                        <div className="mt-2">
                          <iframe 
                            ref={closeModalRef} 
                            className="block w-80 h-60 sm:w-160 sm:h-96"
                            src={`https://www.youtube.com/embed/${youtubeKey}?autoplay=1`} 
                          />                      
                        </div>

                      </div>
                    </Transition.Child>
                  </div>
                </Dialog>
              </Transition>
          </div>
      )
    }

    return null
}
