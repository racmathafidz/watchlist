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

export const getStaticProps = async () => {
  const allTrendingRes = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`)
  const allTrending = await allTrendingRes.json()

  const movieTrendingRes = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.API_KEY}`)
  const movieTrending = await movieTrendingRes.json()

  const tvTrendingRes = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.API_KEY}`)
  const tvTrending = await tvTrendingRes.json()

  const moviePopularRes = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const moviePopular = await moviePopularRes.json()

  const tvPopularRes = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const tvPopular = await tvPopularRes.json()

  const movieInTheaterRes = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const movieInTheater = await movieInTheaterRes.json()

  const tvAiringRes = await fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const tvAiring = await tvAiringRes.json()

  return {
    props: {
      allTrending: allTrending.results,
      movieTrending: movieTrending.results,
      tvTrending: tvTrending.results,
      moviePopular: moviePopular.results,
      tvPopular: tvPopular.results,
      movieInTheater: movieInTheater.results,
      tvAiring: tvAiring.results,
    }
  }
};
