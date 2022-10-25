import type { NextPage } from 'next'

import { Footer, Header, Layout } from '../components'

const Home: NextPage = () => {
  return (
    <Layout title='home' description='Página inicial'>
      <Header />
      Home
      <Footer />
    </Layout>
  )
}

export default Home
