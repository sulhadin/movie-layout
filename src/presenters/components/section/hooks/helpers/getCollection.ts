import sortBy from 'lodash/sortBy'
import MovieApi from '../../../../../lib/client/MovieApi'
import { IMovie, ICollection } from '../../../../../types/movie'
/**
 * Created for generate unique id for each movie item.
 * Since the real data must contain real unique ids, this process will no longer be needed.
 *
 * @param {ICollection[]} collections - List of collection to be transformed.
 * @return {ICollection[]} - Returns a ordered and transformed movie collection list.
 * @example
 *
 *   const result = transformData(collectionsData);
 *
 *   // [{
 *   //   id: "filmler",
 *   //   order: 0,
 *   //   title: "Filmler",
 *   //   data: [
 *   //           id: 1
 *   //           image: "suikastcinin-inanci.jpeg",
 *   //           published_date: "2016-07-19T17:18:37.833000Z",
 *   //           subTitle: "Aksiyon - Macera",
 *   //           title: "Suikastçinin İnancı",
 *   //           url: "filmler/suikastcinin-inanci",
 *   //           uId: "filmler_1",
 *   //         ]
 *   //   }]
 */
export function transformData(collections: ICollection[]): ICollection[] {
  const newCollections = collections.map((collection) => {
    const data = collection.data.map((item) => ({
      ...item,
      uId: `${collection.id}_${item.id}`,
    }))

    return {
      ...collection,
      data,
    }
  })

  return sortBy(newCollections, ['order'])
}

/**
 * Gets collection data from movie api and returns after transforming it.
 *
 * @return {Promise<ICollection[]>} - Returns a movie collection list.
 */
export async function getCollections(): Promise<ICollection[]> {
  const movies = await MovieApi.getCollections()

  return transformData(movies)
}

/**
 * Flats collection data after filtering by favorites.
 *
 * @param {ICollection[]} collections - List of movie collection.
 * @param {string[]} favorites - String list of favorite movie ids.
 */
export function getFavoritesBy(collections: ICollection[], favorites: string[]): IMovie[] {
  let movies: IMovie[] = []

  collections.forEach((collection) => {
    movies = [...movies, ...collection.data.filter((movie) => favorites.includes(movie.uId))]
  })

  return movies
}
