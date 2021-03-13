import React from 'react'

import Header from '../components/header/Header'
import Section from '../components/section/Section'
import { SectionEnums } from '../../enums/SectionEnums'
import { Caption, Container, Content, Layout } from './styled'

const Home: React.FC = () => {
    return (
        <Layout background={'assets/Bg@1X.png'}>
            <Content>
                <Header />
                <Caption>
                    LOREM IPSUM <b>DOLOR SIT AMET</b>
                </Caption>
                <Container>
                    <h1>Movies</h1>
                    <Section sectionType={SectionEnums.MOVIES} />
                </Container>
                <Container>
                    <h1>Series</h1>
                    <Section sectionType={SectionEnums.SERIES} />
                </Container>
            </Content>
        </Layout>
    )
}

export default Home
