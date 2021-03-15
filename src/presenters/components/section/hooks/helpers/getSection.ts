import sortBy from 'lodash/sortBy'
import MovieApi from '../../../../../lib/client/MovieApi'
import { IMovie, ICollection } from '../../../../../types/movie'
/**
 * Created for generate unique id for each movie item.
 * Since the real data must contain real unique ids, this process will no longer be needed.
 *
 * @param collections
 *
 *
 */
export function transformData(collections: ICollection[]): ICollection[] {
  const newCollections = collections.map((collection) => {
    const data = collection.data.map((item) => ({
      ...item,
      uId: `${collection.id}_${item.id}`,
      type: collection.id,
    }))

    return {
      ...collection,
      data,
    }
  })

  return sortBy(newCollections, ['order'])
}

export async function getSections(): Promise<ICollection[]> {
  const movies = await MovieApi.getSections()

  return transformData(movies)
}

export function getFavoritesBy(collections: ICollection[], favorites: string[]): IMovie[] {
  let movies: IMovie[] = []

  collections.forEach((collection) => {
    movies = [...movies, ...collection.data.filter((movie) => favorites.includes(movie.uId))]
  })

  return movies
}
