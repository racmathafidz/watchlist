import { useEmblaCarousel } from 'embla-carousel/react'

import Layout from '../components/layout'
import EmblaCarousel from "../components/MainTrendingCarousel/EmblaCarousel"

export default function Home(props) {
  
  const { mixTrending } = props
  const [emblaRef] = useEmblaCarousel()

  // Get 3 Movie / Tv Show for Carousel
  const mixTrendingCarousel = mixTrending.filter( (items, index) => { return index <= 4 })

  return (
    <Layout title="Watchlist">
      <EmblaCarousel slides={mixTrendingCarousel} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`)
  const data = await res.json()

  return {
    props: {
      mixTrending: data.results
    }
  }
};
