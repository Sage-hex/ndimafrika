import React from 'react'
import Hero from '../../components/Hero/Hero'
import FeaturedBook from '../../components/FeaturedBook/FeaturedBook'
import InfiniteScrollCards from '../../utils/InfiniteScrollCards'
import HighlightReel from '../../components/HighlightReel/HighlightReel'
import UserDashboard from '../UserDashboard/UserDashboard'
import AdminDashboard from '../Admin/Admin'
import PublishNewBook from '../Admin/PublishNewBook'


const Home = () => {
  return (
    <section className='bg-[#121926]  w-full min-h-screen '>
      <Hero/>
      <FeaturedBook/>
      <HighlightReel/>
      <InfiniteScrollCards/>
      {/* <UserDashboard/> */}
      <AdminDashboard/>
      <PublishNewBook/>
      
      
    </section>
  )
}

export default Home
