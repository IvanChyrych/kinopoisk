export interface IFilmsItem extends Error {
    isbn13: string
    image: string
    title: string
    subtitle?: string | null
    price: string
    url?: string
    name: string
    message: string
    query?: string
    isFavorite?: boolean
    page?: string
    counter?: number
}
