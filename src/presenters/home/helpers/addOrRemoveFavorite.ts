export default function addOrRemoveFavorite(favorites: string[], uId: string): string[] {
  if (favorites.includes(uId)) {
    return favorites.filter((movieId) => movieId !== uId)
  }

  return [...favorites, uId]
}
