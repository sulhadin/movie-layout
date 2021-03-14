import { IMovie } from '../../../../types/movie'
import { SectionEnums } from '../../../../enums/SectionEnums'
import { getFavoritesBy } from './getSection'
import { ISection } from '../../../../types/section'

/**
 *
 * @param response
 * @param favorites
 */
export function destructureSections(
    response: IMovie[],
    favorites: string[]
): ISection {
    const movies = response.filter(
        (movie) => movie.type === SectionEnums.MOVIES
    )
    const series = response.filter(
        (movie) => movie.type === SectionEnums.SERIES
    )

    const favoriteList = getFavoritesBy(response, favorites)

    return {
        movies,
        series,
        favorites: favoriteList,
    }
}
