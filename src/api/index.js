import axios from 'axios'
import { BASE_URL } from '../constants/api'

const config = {
  baseUrl: BASE_URL,
  headers: {},
  method: 'get',
}

export const getAPI = async (url, data = '') => {
  return await axios({
    ...config,
    url: `${config.baseUrl}/${url}/${data}`,
  })
    .then(response => {
    //   console.log(response)
      return {
        status: response.status,
        data: response.data,
      }
    })
    .catch(error => {
    //   console.log(error)
      return {
        status: error.status,
        data: error.response,
      }
    })
}
