import MovieApi from '../../../../lib/client/MovieApi'

export default async function getMenus() {
    return await MovieApi.getMenus()
}
