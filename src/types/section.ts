import { IMovie } from './movie'

export type ISection = {
    movies: IMovie[]
    series: IMovie[]
    favorites: IMovie[]
}
