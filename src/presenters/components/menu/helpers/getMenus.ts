import MovieApi from '../../../../lib/client/MovieApi'

export default async function getMenus() {
  return MovieApi.getMenus()
}
