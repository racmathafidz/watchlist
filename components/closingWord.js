/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
export default function closingWord({ allTrendingData }) {
  return (
    <div className="w-full h-56 sm:h-96 lg:h-120">
      <img
        className="w-52 sm:w-96 lg:w-128 xl:w-180 h-56 sm:h-96 lg:h-120 object-center object-cover z-0"
        src={`https://image.tmdb.org/t/p/original/${allTrendingData[0].backdrop_path}`}
        alt="closing word"
        align="right"
      />
      <div className="flex items-center z-10 absolute w-full h-56 sm:h-96 lg:h-120 bg-gradient-to-r from-black via-black">
        <div className="w-1/2 my-auto italic text-gray-100 text-center text-base sm:text-2xl lg:text-3xl font-extralight pb-20">
          "Sit back, relax, and enjoy the show"
          {' '}
          <br />
          - Watchlist Team
        </div>
      </div>
    </div>
  );
}
