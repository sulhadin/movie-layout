import React, { useCallback, useEffect, useState } from 'react'
import { ICollection, IMovie } from '../../../types/movie'
import { getFavoritesBy, getSections } from './helpers/getSection'
import { useAppDispatch, useAppSelector } from '../../../store/helpers/hooks'
import {
  saveFavorite,
  selectPreferences,
} from '../../../store/preferencesSlice'
import { Container } from '../../home/styled'
import Section from './Section'
import addOrRemoveFavorite from '../../home/helpers/addOrRemoveFavorite'
import { Display } from '../../../components/display/Display'

const Sections: React.FC = () => {
  const [favoriteData, setFavoriteData] = useState<IMovie[]>([])
  const [collection, setCollection] = useState<ICollection[]>()
  const dispatch = useAppDispatch()
  const state = useAppSelector(selectPreferences)

  console.log('render')

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

  const onItemClick = useCallback(
    (movie: IMovie) => {
      const favorites = addOrRemoveFavorite(state.favorites, movie.uId)

      dispatch(saveFavorite(favorites))
      reloadFavorites(favorites)
    },
    [state.favorites]
  )

  if (!collection) {
    return <>Loading...</>
  }

  return (
    <>
      {collection.map((d) => (
        <Container key={d.id}>
          <Section title={d.title} data={d.data} onItemClick={onItemClick} />
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
