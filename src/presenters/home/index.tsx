import React from 'react'

import Header from '../components/header/Header'
import Sections from '../components/section/Sections'
import { Caption, Content, Layout } from './styled/styled'

const background = 'assets/Bg@1X.png'

const Home: React.FC = () => (
  <Layout background={background}>
    <Content>
      <Header />
      <Caption>
        LOREM IPSUM <b>DOLOR SIT AMET</b>
      </Caption>
      <Sections />
    </Content>
  </Layout>
)

export default Home
