import React, { useEffect, useState } from 'react'
import { ICollection, IMovie } from '../../../types/movie'
import { getFavoritesBy, getSections } from './helpers/getSection'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import {
    saveFavorite,
    selectPreferences,
} from '../../../reducers/preferencesSlice'
import { Container } from '../../home/styled'
import Section from './Section'
import addOrRemoveFavorite from '../../home/helpers/addOrRemoveFavorite'
import { Display } from '../../../components/display/Display'

const Sections: React.FC = () => {
    const [favoriteData, setFavoriteData] = useState<IMovie[]>([])
    const [collection, setCollection] = useState<ICollection[]>()

    const dispatch = useAppDispatch()
    const state = useAppSelector(selectPreferences)

    useEffect(() => {
        getSections().then(setCollection)
    }, [])

    useEffect(() => {
        reloadFavorites(state.favorites)
    }, [collection])

    const reloadFavorites = (favorites) => {
        if (collection) {
            const favoriteList = getFavoritesBy(collection, favorites)
            setFavoriteData({ ...favorites, favorites: favoriteList })
        }
    }

    const onItemClick = (movie: IMovie) => {
        const favorites = addOrRemoveFavorite(state.favorites, movie.uId)

        dispatch(saveFavorite(favorites))
        reloadFavorites(favorites)
    }

    if (!collection) {
        return <>Loading...</>
    }

    return (
        <>
            {collection.map((d) => (
                <Container>
                    <Section
                        key={d.id}
                        title={d.title}
                        data={d.data}
                        onItemClick={onItemClick}
                    />
                </Container>
            ))}

            <Display display={favoriteData.length >= 3}>
                <Container>
                    <Section
                        title={'Favoriler'}
                        data={favoriteData}
                        onItemClick={onItemClick}
                    />
                </Container>
            </Display>
        </>
    )
}

export default Sections
