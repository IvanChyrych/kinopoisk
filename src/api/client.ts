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

