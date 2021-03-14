import React, { useEffect, useState } from 'react'
import { IMovie } from '../../../types/movie'
import { getFavoritesBy, getSections } from './helpers/getSection'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import {
    saveFavorite,
    selectPreferences,
} from '../../../reducers/preferencesSlice'
import { Container } from '../../home/styled'
import Section from './Section'
import addOrRemoveFavorite from '../../home/helpers/addOrRemoveFavorite'
import { ISection } from '../../../types/section'
import { destructureSections } from './helpers/destructureSections'

// Extract render as SectionGrid
// Build local state
const Sections: React.FC = () => {
    const [sections, setSections] = useState<ISection>()
    const [data, setData] = useState<IMovie[]>()

    const dispatch = useAppDispatch()
    const state = useAppSelector(selectPreferences)

    useEffect(() => {
        getSections().then((response) => {
            setData(response)
        })
    }, [])

    console.log('data', data)
    useEffect(() => {
        if (data) {
            const result = destructureSections(data, state.favorites)
            setSections(result)
        }
    }, [data])

    const reloadFavorites = (favorites) => {
        if (sections && data) {
            const favoriteList = getFavoritesBy(data, favorites)
            setSections({ ...sections, favorites: favoriteList })
        }
    }

    const onItemClick = (movie: IMovie) => {
        const favorites = addOrRemoveFavorite(state.favorites, movie.uId)

        dispatch(saveFavorite(favorites))
        reloadFavorites(favorites)
    }

    if (!sections) {
        return <>Loading...</>
    }

    return (
        <>
            <Container>
                <Section
                    title={'Filmler'}
                    data={sections.movies}
                    onItemClick={onItemClick}
                />
            </Container>
            <Container>
                <Section
                    title={'Diziler'}
                    data={sections.series}
                    onItemClick={onItemClick}
                />
            </Container>
            <Container>
                <Section
                    title={'Favoriler'}
                    data={sections.favorites}
                    onItemClick={onItemClick}
                />
            </Container>
        </>
    )
}

export default Sections
