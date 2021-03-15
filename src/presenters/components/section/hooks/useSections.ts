import { useCallback, useEffect, useState } from 'react'

import { ICollection, IMovie } from '../../../../types/movie'
import { getFavoritesBy, getCollections } from './helpers/getCollection'
import { useAppDispatch, useAppSelector } from '../../../../store/helpers/hooks'
import { saveFavorite as saveFavoriteAction, selectPreferences } from '../../../../store/preferencesStore'
import addOrRemoveFavorite from '../../../home/helpers/addOrRemoveFavorite'

export default function useSections() {
  const [favoriteData, setFavoriteData] = useState<IMovie[]>([])
  const [collection, setCollection] = useState<ICollection[]>()

  const state = useAppSelector(selectPreferences)

  const dispatch = useAppDispatch()
  const saveFavorite = useCallback((payload) => dispatch(saveFavoriteAction(payload)), [])

  useEffect(() => {
    getCollections().then((response) => {
      setCollection(response)
      reloadFavorites(state.favorites, response)
    })
  }, [])

  const reloadFavorites = (favorites, data) => {
    if (data) {
      const favoriteList = getFavoritesBy(data, favorites)
      setFavoriteData(favoriteList)
    }
  }

  const onItemClick = useCallback(
    (movie: IMovie) => {
      const favorites = addOrRemoveFavorite(state.favorites, movie.uId)

      saveFavorite(favorites)
      reloadFavorites(favorites, collection)
    },
    [state.favorites, collection],
  )

  return {
    favoriteData,
    collection,
    onItemClick,
  }
}
