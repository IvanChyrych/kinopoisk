import axios from 'axios'
import { baseEndpoint } from './endpoints'

export const client = axios.create({
  baseURL: baseEndpoint,
  // timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
    'X-API-KEY': 'QPVT2B0-R1F4QG4-JZRSDBM-2FPDWCJ'
}
})

