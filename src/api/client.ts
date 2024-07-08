import axios from 'axios'
import { baseEndpoint } from './endpoints'

export const client = axios.create({
  baseURL: baseEndpoint,
  // timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': '0JPEDBY-CM3MRJQ-NDMR0N1-FW6Q5R1'
}
})

export const setAccessTokenClient = (token) => {
  if (!token) return
  client.defaults.headers.common.Authorization = 'Bearer ' + token
}
