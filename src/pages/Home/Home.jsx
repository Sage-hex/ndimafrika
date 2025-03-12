import React from 'react'
import Hero from '../../components/Hero/Hero'
import FeaturedBook from '../../components/FeaturedBook/FeaturedBook'
import InfiniteScrollCards from '../../utils/InfiniteScrollCards'


const Home = () => {
  return (
    <section className=' w-full min-h-screen '>
      <Hero/>
      <FeaturedBook/>
      <InfiniteScrollCards/>
      
    </section>
  )
}

export default Home
