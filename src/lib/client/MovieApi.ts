import HttpClient from './HttpClient'
import { ICollection } from '../../types/movie'
import { TMenu } from '../../types/menu'

class MovieApi extends HttpClient {
    public constructor() {
        super('https://dtv-projects.firebaseio.com')
    }
    public getMenus = () => this.instance.get<TMenu[]>('/menu.json')
    public getSections = () =>
        this.instance.get<ICollection[]>('/sections.json')
}

const movieApi = new MovieApi()

export default movieApi
