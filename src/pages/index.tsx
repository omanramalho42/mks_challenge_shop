import type { NextPage } from 'next'

import { Footer, Header, Layout, ProductsList } from '../components'

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
