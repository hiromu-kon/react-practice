import axios from 'axios'

/**
 * axios初期設定
 */
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

export const globalAxios = axios.create({
  headers: {
      'Content-type': 'application/json'
  },
  timeout: 15000
})
