import { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/api'

export const useAxios = config => {
  axios.defaults.baseURL = BASE_URL

  const [res, setRes] = useState({})
  const [err, setErr] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData(config)
  }, [])

  const fetchData = async () => {
    await axios
      .request(config)
      .then(res => setRes(res))
      .catch(err => setErr(err))
      .finally(() => setLoading(false))
  }

  return [res, err, loading]
}
