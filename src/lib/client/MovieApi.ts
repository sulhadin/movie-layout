import HttpClient from './HttpClient'
import { TMenu, TSections } from '../../types'

class MovieApi extends HttpClient {
    public constructor() {
        super('https://dtv-projects.firebaseio.com')
    }
    public getMenus = () => this.instance.get<TMenu[]>('/menu.json')
    public getSections = () => this.instance.get<TSections[]>('/sections.json')
}

const movieApi = new MovieApi()

export default movieApi
