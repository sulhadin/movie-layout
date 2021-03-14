import MovieApi from '../../../../lib/client/MovieApi'
import { IMovie, IMovies } from '../../../../types/movie'
import { SectionEnums } from '../../../../enums/SectionEnums'

/**
 * Created for generate unique id for each movie item.
 * Since the real data must contain real unique ids, this process will no longer be needed.
 *
 * @param sections
 */
export function transformData(sections: IMovies[]): IMovie[] {
    console.log('sections', sections)
    const movies = getSectionBy(sections, SectionEnums.MOVIES)
    const series = getSectionBy(sections, SectionEnums.SERIES)

    const transformedMovies = movies.map((movie) => ({
        ...movie,
        uId: `${SectionEnums.MOVIES}_${movie.id}`,
        type: SectionEnums.MOVIES,
    }))
    const transformedSeries = series.map((show) => ({
        ...show,
        uId: `${SectionEnums.SERIES}_${show.id}`,
        type: SectionEnums.SERIES,
    }))

    return [...transformedMovies, ...transformedSeries]
}

export async function getSections(): Promise<IMovie[]> {
    const movies = await MovieApi.getSections()

    return transformData(movies)
}

export function getSectionBy(sections, sectionId: SectionEnums): IMovie[] {
    const result = sections.find(
        (section) => section.id === sectionId
    ) as IMovies

    return result.data
}

export function getFavoritesBy(
    movies: IMovie[],
    favorites: string[]
): IMovie[] {
    return movies.filter((movie) => favorites.includes(movie.uId))
}
