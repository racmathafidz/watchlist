import Layout from '../components/layout'
import TrendingSlide from '../components/trendingSlide'
import TvShowsAiring from '../components/tvShowsAiring'
import Trending from '../components/trending'
import Popular from '../components/popular'
import TvByGenre from '../components/tvByGenre'

export default function Tv(props) {

    const { tvTrending, tvPopular, tvAiring, actionData, comedyData, dramaData, animationData  } = props

    // Get 5 Movie for Carousel
    const tvTrendingSlide = tvTrending.filter( (items, index) => { return index <= 4 })

    return (
        <Layout title="TV Shows | Watchlist">
            <TrendingSlide tvTrendingData={tvTrendingSlide} tvTrendingOnly />
            <TvShowsAiring tvShowsAiringData={tvAiring} />
            <Trending tvTrendingData={tvTrending} tvTrendingOnly />
            <Popular tvPopularData={tvPopular} tvPopularOnly />
            <TvByGenre actionData={actionData} comedyData={comedyData} dramaData={dramaData} animationData={animationData} />
        </Layout>
    )
}

export const getStaticProps = async () => {
    const tvTrendingRes = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.API_KEY}`)
    const tvTrending = await tvTrendingRes.json()

    const tvPopularRes = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    const tvPopular = await tvPopularRes.json()

    const tvAiringRes = await fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    const tvAiring = await tvAiringRes.json()
     
    const actionDataRes = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=10759&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`)
    const actionData = await actionDataRes.json()

    const comedyDataRes = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=35&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`)
    const comedyData = await comedyDataRes.json()

    const dramaDataRes = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=18&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`)
    const dramaData = await dramaDataRes.json()

    const animationDataRes = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=16&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`)
    const animationData = await animationDataRes.json()

    return {
        props: {
            tvTrending: tvTrending.results,
            tvPopular: tvPopular.results,
            tvAiring: tvAiring.results,
            actionData: actionData.results,
            comedyData: comedyData.results,
            dramaData: dramaData.results,
            animationData: animationData.results
        }
    }
}
