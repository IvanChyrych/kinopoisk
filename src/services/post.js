import { client } from '../api/client'
import { postsEndpoint, myPostsEndpoint, postsSearchEndpoint } from '../api/endpoints'

async function requestPosts (params = {}) {
  const { data } = await client.get(postsEndpoint, { params })
  return data
}



async function requestPost (id) {
  const { data } = await client.get(`${postsEndpoint}/${id}`)
  return data
}

async function requestMyPosts (params = {}) {
  const { data } = await client.get(myPostsEndpoint, { params })
  return data.results
}

async function requestCreatePost (formData) {
  const response = await client.post(postsEndpoint, formData)

  return response
}



async function requestSearchPosts (params = {}) {
  const { data } = await client.get(postsSearchEndpoint, { params })
  return data
}



export { requestPosts, requestPost, requestMyPosts, requestCreatePost,requestSearchPosts }
