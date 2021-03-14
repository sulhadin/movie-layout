import { useCallback, useEffect, useState } from 'react'

import { ICollection, IMovie } from '../../../../types/movie'
import { getFavoritesBy, getSections } from './helpers/getSection'
import { useAppDispatch, useAppSelector } from '../../../../store/helpers/hooks'
import {
  saveFavorite,
  selectPreferences,
} from '../../../../store/preferencesStore'
import addOrRemoveFavorite from '../../../home/helpers/addOrRemoveFavorite'

export default function useSections() {
  const [favoriteData, setFavoriteData] = useState<IMovie[]>([])
  const [collection, setCollection] = useState<ICollection[]>()
  const dispatch = useAppDispatch()
  const state = useAppSelector(selectPreferences)

  useEffect(() => {
    getSections().then((response) => {
      setCollection(response)
      reloadFavorites(state.favorites, response)
    })
  }, [])

  const reloadFavorites = (favorites, data) => {
    if (collection) {
      const favoriteList = getFavoritesBy(data, favorites)
      setFavoriteData({ ...favorites, favorites: favoriteList })
    }
  }

  const onItemClick = useCallback(
    (movie: IMovie) => {
      const favorites = addOrRemoveFavorite(state.favorites, movie.uId)

      dispatch(saveFavorite(favorites))
      reloadFavorites(favorites, collection)
    },
    [state.favorites]
  )

  return {
    favoriteData,
    collection,
    onItemClick,
  }
}
