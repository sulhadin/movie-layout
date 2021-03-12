import HttpClientNetwork from './HttpClient'

type Menu = {
    target: string
    title: string
    url: string
}

type Section = {
    id: number
    image: string
    published_date: string
    subTitle: string
    title: string
    url: string
}

export default class MovieApi extends HttpClientNetwork {
    constructor() {
        super('https://dtv-projects.firebaseio.com')
    }
    menus = () => this.instance.get<Menu[]>('/menu.json')
    sections = () => this.instance.get<Section[]>('(sections.json')
}
