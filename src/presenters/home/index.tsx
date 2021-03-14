import React from 'react'

import Header from '../components/header/Header'
import Section from '../components/section/Section'
import { SectionEnums } from '../../enums/SectionEnums'
import { Caption, Container, Content, Layout, Title } from './styled'
import { TSection } from '../../types'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { saveFavorites, selectPreferences } from '../../app/preferencesSlice'

const background = 'assets/Bg@1X.png'

const Home: React.FC = () => {
    const dispatch = useAppDispatch()
    const state = useAppSelector(selectPreferences)

    console.log('state', state)
    const onItemClick = (section: TSection) => {
        let favorites = [...state.favorites]

        if (state.favorites.includes(section.id)) {
            favorites = [...favorites.filter((id) => id !== section.id)]
        } else {
            favorites.push(section.id)
        }

        dispatch(saveFavorites(favorites))
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
