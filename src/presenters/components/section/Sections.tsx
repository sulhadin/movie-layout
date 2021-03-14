import React, { useEffect, useState } from 'react'
import { IMovie } from '../../../types/movie'
import { getSections } from './helpers/getSection'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import {
    saveFavorite,
    selectPreferences,
} from '../../../reducers/preferencesSlice'
import { Container, Title } from '../../home/styled'
import Section from './Section'
import addOrRemoveFavorite from '../../home/helpers/addOrRemoveFavorite'
import { ISection } from '../../../types/section'
import { destructureSections } from './helpers/destructureSections'

// Extract render as SectionGrid
// Build local state
const Sections: React.FC = () => {
    const [sections, setSections] = useState<ISection>()
    const dispatch = useAppDispatch()
    const state = useAppSelector(selectPreferences)

    useEffect(() => {
        getSections().then((response) => {
            const data = destructureSections(response, state.favorites)
            setSections(data)
        })
    }, [])

    const onItemClick = (movie: IMovie) => {
        const favorites = addOrRemoveFavorite(state.favorites, movie.uId)
        dispatch(saveFavorite(favorites))
    }

    if (!sections) {
        return <>Loading...</>
    }

    return (
        <>
            <Container>
                <Title>Filmler</Title>
                <Section data={sections.movies} onItemClick={onItemClick} />
            </Container>
            <Container>
                <Title>Diziler</Title>
                <Section data={sections.series} onItemClick={onItemClick} />
            </Container>
            <Container>
                <Title>Favoriler</Title>
                <Section data={sections.favorites} onItemClick={onItemClick} />
            </Container>
        </>
    )
}

export default Sections
