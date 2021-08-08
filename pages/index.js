import SwiperCore, { Autoplay, Navigation } from 'swiper/core'

import Layout from '../components/layout'
import TrendingSlide from '../components/trendingSlide'
import MoviesInTheaters from '../components/moviesInTheaters'
import TvShowsAiring from '../components/tvShowsAiring'
import Trending from '../components/trending'
import Popular from '../components/popular'
import ClosingWord from '../components/closingWord'

SwiperCore.use([Autoplay, Navigation]);

export default function Home(props) {
  
  const { allTrending, movieTrending, tvTrending, moviePopular, tvPopular, movieInTheater, tvAiring } = props

  // Get 5 Movie / Tv Show for Carousel
  const allTrendingSlide = allTrending.filter( (items, index) => { return index <= 4 })

  return (
    <Layout title="Watchlist">
      <main>
        <TrendingSlide allTrendingData={allTrendingSlide} allTrending />        
        <Trending allTrendingData={allTrending} movieTrendingData={movieTrending} tvTrendingData={tvTrending} allTrending />
        <Popular moviePopularData={moviePopular} tvPopularData={tvPopular} allPopular />
        <MoviesInTheaters movieInTheaterData={movieInTheater} />
        <TvShowsAiring tvShowsAiringData={tvAiring} /> 
        <ClosingWord allTrendingData={allTrending} />
      </main>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const allTrendingRes = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`)
  const allTrending = await allTrendingRes.json()
  const filteredAllTrendingData = allTrending.results.filter( items => {
    return items.backdrop_path !== null && items.poster_path !== null
  })

  const movieTrendingRes = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}`)
  const movieTrending = await movieTrendingRes.json()
  const filteredMovieTrendingData = movieTrending.results.filter( items => {
    return items.backdrop_path !== null && items.poster_path !== null
  })

  const tvTrendingRes = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.API_KEY}`)
  const tvTrending = await tvTrendingRes.json()
  const filteredTvTrendingData = tvTrending.results.filter( items => {
    return items.backdrop_path !== null && items.poster_path !== null
  })

  const moviePopularRes = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const moviePopular = await moviePopularRes.json()
  const filteredMoviePopularData = moviePopular.results.filter( items => {
    return items.backdrop_path !== null && items.poster_path !== null
  })

  const tvPopularRes = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const tvPopular = await tvPopularRes.json()
  const filteredTvPopularData = tvPopular.results.filter( items => {
    return items.backdrop_path !== null && items.poster_path !== null
  })

  const movieInTheaterRes = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const movieInTheater = await movieInTheaterRes.json()
  const filteredMovieInTheaterData = movieInTheater.results.filter( items => {
    return items.backdrop_path !== null && items.poster_path !== null
  })

  const tvAiringRes = await fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const tvAiring = await tvAiringRes.json()
  const filteredTvAiringData = tvAiring.results.filter( items => {
    return items.backdrop_path !== null && items.poster_path !== null
  })

  return {
    props: {
      allTrending: filteredAllTrendingData,
      movieTrending: filteredMovieTrendingData,
      tvTrending: filteredTvTrendingData,
      moviePopular: filteredMoviePopularData,
      tvPopular: filteredTvPopularData,
      movieInTheater: filteredMovieInTheaterData,
      tvAiring: filteredTvAiringData
    }
  }
};
