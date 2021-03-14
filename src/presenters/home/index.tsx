import React from 'react'

import Header from '../components/header/Header'
import Section from '../components/section/Section'
import { SectionEnums } from '../../enums/SectionEnums'
import { Caption, Container, Content, Layout, Title } from './styled'
import { TSection } from '../../types'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { incrementByAmount, selectMovie } from '../../app/movieSlicer'

const background = 'assets/Bg@1X.png'

const Home: React.FC = () => {
    const dispatch = useAppDispatch()

    const state = useAppSelector(selectMovie)

    console.log('state', state)
    const onItemClick = (section: TSection) => {
        console.log(section)

        dispatch(incrementByAmount(2))
    }

    return (
        <Layout background={background}>
            <Content>
                <Header />
                <Caption>
                    LOREM IPSUM <b>DOLOR SIT AMET</b>
                </Caption>
                <Container>
                    <Title>Filmler</Title>
                    <Section
                        sectionType={SectionEnums.MOVIES}
                        onItemClick={onItemClick}
                    />
                </Container>
                <Container>
                    <Title>Diziler</Title>
                    <Section
                        sectionType={SectionEnums.SERIES}
                        onItemClick={onItemClick}
                    />
                </Container>
            </Content>
        </Layout>
    )
}

export default Home
