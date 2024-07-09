import { client } from '../api/client'
import { filmEndpoint, filmsEndpoint, filmsSearchEndpoint } from '../api/endpoints'

async function requestFilms(params = {}) {
  const { data } = await client.get(filmsEndpoint, { params })
  return data
}

async function requestFilm(id: number) {
  const { data } = await client.get(`${filmEndpoint}/${id}`)
  return data
}

async function requestSearchFilms(params = {}) {
  const { data } = await client.get(filmsSearchEndpoint, { params })
  return data
}

export { requestFilms, requestFilm, requestSearchFilms }
