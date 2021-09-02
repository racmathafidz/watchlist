/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import Layout from '../../components/layout';
import TrendingSlide from '../../components/trendingSlide';
import MoviesInTheaters from '../../components/moviesInTheaters';
import Trending from '../../components/trending';
import Popular from '../../components/popular';
import MovieByGenre from '../../components/movieByGenre';

export default function Movie(props) {
  const {
    movieInTheater, movieTrending, moviePopular, actionData, comedyData, horrorData, romanceData,
  } = props;

  // Get 5 Movie for Carousel
  const movieTrendingSlide = movieTrending.filter((items, index) => index <= 4);

  return (
    <Layout title="Movies | Watchlist">
      <main className="mt-2">
        <TrendingSlide movieTrendingData={movieTrendingSlide} movieTrendingOnly />
        <MoviesInTheaters movieInTheaterData={movieInTheater} />
        <Trending movieTrendingData={movieTrending} movieTrendingOnly />
        <Popular moviePopularData={moviePopular} moviePopularOnly />
        <MovieByGenre actionData={actionData} comedyData={comedyData} horrorData={horrorData} romanceData={romanceData} />
      </main>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const movieInTheaterRes = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movieInTheater = await movieInTheaterRes.json();
  const filteredMovieInTheaterData = movieInTheater.results.filter((items) => items.backdrop_path !== null && items.poster_path !== null);

  const movieTrendingRes = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}`);
  const movieTrending = await movieTrendingRes.json();
  const filteredMovieTrendingData = movieTrending.results.filter((items) => items.backdrop_path !== null && items.poster_path !== null);

  const moviePopularRes = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const moviePopular = await moviePopularRes.json();
  const filteredMoviePopularData = moviePopular.results.filter((items) => items.backdrop_path !== null && items.poster_path !== null);

  const actionDataRes = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate`);
  const actionData = await actionDataRes.json();
  const filteredActionData = actionData.results.filter((items) => items.backdrop_path !== null && items.poster_path !== null);

  const comedyDataRes = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate`);
  const comedyData = await comedyDataRes.json();
  const filteredComedyData = comedyData.results.filter((items) => items.backdrop_path !== null && items.poster_path !== null);

  const horrorDataRes = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate`);
  const horrorData = await horrorDataRes.json();
  const filteredHorrorData = horrorData.results.filter((items) => items.backdrop_path !== null && items.poster_path !== null);

  const romanceDataRes = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749&with_watch_monetization_types=flatrate`);
  const romanceData = await romanceDataRes.json();
  const filteredRomanceData = romanceData.results.filter((items) => items.backdrop_path !== null && items.poster_path !== null);

  return {
    props: {
      movieInTheater: filteredMovieInTheaterData,
      movieTrending: filteredMovieTrendingData,
      moviePopular: filteredMoviePopularData,
      actionData: filteredActionData,
      comedyData: filteredComedyData,
      horrorData: filteredHorrorData,
      romanceData: filteredRomanceData,
    },
  };
};
