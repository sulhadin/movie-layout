export default function addOrRemoveFavorite(
    favorites: string[],
    uId: string
): string[] {
    let newFavorites = [...favorites]

    if (favorites.includes(uId)) {
        newFavorites = [...favorites.filter((movieId) => movieId !== movieId)]
    } else {
        newFavorites.push(uId)
    }

    return newFavorites
}
