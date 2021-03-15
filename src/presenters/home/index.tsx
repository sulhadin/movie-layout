import React from 'react'

import Header from '../components/header/Header'
import SectionContainer from '../components/section/SectionContainer'
import { Caption, Content, Layout } from './styled'

const background = 'assets/Bg@1X.png'

const Home: React.FC = () => (
  <Layout background={background}>
    <Content>
      <Header />
      <Caption>
        LOREM IPSUM <b>DOLOR SIT AMET</b>
      </Caption>
      <SectionContainer />
    </Content>
  </Layout>
)

export default Home
