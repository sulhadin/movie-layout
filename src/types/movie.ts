export interface IMovie {
    id: number
    uId: string
    type: string
    image: string
    published_date: string
    subTitle: string
    title: string
    url: string
}

export interface IMovies {
    id: string
    data: IMovie[]
}
