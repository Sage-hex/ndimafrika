import React from 'react'
import Hero from '../../components/Hero/Hero'
import FeaturedBook from '../../components/FeaturedBook/FeaturedBook'
import InfiniteScrollCards from '../../utils/InfiniteScrollCards'
import HighlightReel from '../../components/HighlightReel/HighlightReel'


const Home = () => {
  return (
    <section className='bg-Cream-Beige w-full min-h-screen '>
      <Hero/>
      <FeaturedBook/>
      <HighlightReel/>
      <InfiniteScrollCards/>
      
      
    </section>
  )
}

export default Home
