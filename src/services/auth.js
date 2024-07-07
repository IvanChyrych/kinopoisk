import { client } from '../api/client'
import { signUpEndpoint, activationEndpoint, signInEndpoint, refreshJWTEndpoint } from '../api/endpoints'

async function requestSignUp (userData) {
  const { data } = await client.post(signUpEndpoint, userData)
  return data
}

async function requestSignIn (userData) {
  const { data } = await client.post(signInEndpoint, userData)
  return data
}

async function requestActivation (activationData) {
  const { status } = await client.post(activationEndpoint, activationData)
  return status === 204
}

async function requestRefreshJWT (refreshToken) {
  const { data } = await client.post(refreshJWTEndpoint, { refresh: refreshToken })
  return data.access
}

export { requestSignUp, requestActivation, requestSignIn, requestRefreshJWT }
