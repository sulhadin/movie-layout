import React from 'react'

import Header from '../components/header/Header'
import { Caption, Content, Layout } from './styled'
import Sections from '../components/section/Sections'

const background = 'assets/Bg@1X.png'

const Home: React.FC = () => {
    return (
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
}

export default Home
