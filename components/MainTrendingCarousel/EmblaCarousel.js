import React, { useState, useEffect, useCallback } from "react";
import { useEmblaCarousel } from "embla-carousel/react";
import Link from 'next/link'


import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import { useRecursiveTimeout } from "./useRecursiveTimeout";

const AUTOPLAY_INTERVAL = 5000;

const EmblaCarousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const autoplay = useCallback(() => {
    if (!embla) return;
    if (embla.canScrollNext()) {
      embla.scrollNext();
    } else {
      embla.scrollTo(0);
    }
  }, [embla]);

  const { play, stop } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);

  const scrollNext = useCallback(() => {
    if (!embla) return;
    embla.scrollNext();
    stop();
  }, [embla, stop]);

  const scrollPrev = useCallback(() => {
    if (!embla) return;
    embla.scrollPrev();
    stop();
  }, [embla, stop]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
    embla.on("pointerDown", stop);
  }, [embla, onSelect, stop]);

  useEffect(() => {
    play();
  }, [play]);

  console.log(slides)

  return (
    <div className="embla container">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {slides.map((items, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner h-48 sm:h-96 lg:h-136">
                <img
                  className="embla__slide__img xl:-top-16"
                  src={`https://image.tmdb.org/t/p/original/${items.backdrop_path}`}
                  alt="Trending Carousel"
                />
                <Link href="">
                  <a className="bottom-0 left-0 absolute pl-5 pb-1 sm:pl-10 sm:pb-4 lg:pl-14 lg:pb-5 xl:pl-20 xl:pb-10 bg-gradient-to-t from-black via-truegray-900">
                    <h1 className="text-xl sm:text-3xl lg:text-5xl font-semibold mb-1 w-4/5">{items.media_type === "tv" ? items.name : items.title}</h1>
                    <p className="overflow-clip text-xs sm:text-lg lg:text-xl text-justify font-light h-7 sm:h-24 lg:h-auto w-4/5">{items.overview}</p>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default EmblaCarousel;
