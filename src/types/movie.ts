export interface IMovie {
  id: number
  uId: string
  image: string
  published_date: string
  subTitle: string
  title: string
  url: string
}

export interface ICollection {
  id: string
  order: number
  title: string
  data: IMovie[]
}
