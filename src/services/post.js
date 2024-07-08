import { client } from '../api/client'
import { postEndpoint,postsEndpoint, postsSearchEndpoint } from '../api/endpoints'

async function requestPosts (params = {}) {
  const { data } = await client.get(postsEndpoint, { params })
  return data
}


async function requestPost (id) {
  const { data } = await client.get(`${postEndpoint}/${id}`)
  return data
}

async function requestSearchPosts (params = {}) {
  const { data } = await client.get(postsSearchEndpoint, { params })
  return data
}



export { requestPosts, requestPost, requestSearchPosts }
