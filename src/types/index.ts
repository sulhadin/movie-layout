export type TMenu = {
    target: string
    title: string
    url: string
}

export type TSection = {
    id: number
    image: string
    published_date: string
    subTitle: string
    title: string
    url: string
}

export type TSections = {
    id: string
    data: TSection[]
}
