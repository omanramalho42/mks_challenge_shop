import type { NextPage } from 'next'
import { useState } from 'react'

import { Footer, Header, Layout, ProductsList } from '../components'
import Sidebar from '../components/Sidebar'

const Home: NextPage = () => {
  
  return (
    <Layout title='home' description='Página inicial'>
      <Header />
      <ProductsList />
      <Footer />
    </Layout>
  )
}

export default Home
