import React from 'react'

import Header from '../components/header/Header'
import Section from '../components/section/Section'
import { SectionEnums } from '../../enums/SectionEnums'
import { Caption, Container, Content, Layout, Title } from './styled'

const background = 'assets/Bg@1X.png'

const Home: React.FC = () => {
    return (
        <Layout background={background}>
            <Content>
                <Header />
                <Caption>
                    LOREM IPSUM <b>DOLOR SIT AMET</b>
                </Caption>
                <Container>
                    <Title>Filmler</Title>
                    <Section sectionType={SectionEnums.MOVIES} />
                </Container>
                <Container>
                    <Title>Diziler</Title>
                    <Section sectionType={SectionEnums.SERIES} />
                </Container>
            </Content>
        </Layout>
    )
}

export default Home
