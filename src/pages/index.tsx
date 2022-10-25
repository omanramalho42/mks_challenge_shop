import type { NextPage } from 'next'
import React, { Suspense } from 'react'

import { Footer, Header, Layout } from '../components'

import dynamic from 'next/dynamic'

const DynamicProductsList = dynamic(() => import('../components/ProductsList'), {
  suspense: true,
})

const Home: NextPage = () => {
  
  return (
    <Layout title='home' description='Página inicial'>
      <Header />
      <Suspense fallback={'Loading...'}>
        <DynamicProductsList />
      </Suspense>
      <Footer />
    </Layout>
  )
}

export default Home
