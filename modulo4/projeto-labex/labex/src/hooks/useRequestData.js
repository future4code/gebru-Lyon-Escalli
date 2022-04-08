import { useState, useEffect } from 'react'
import axios from 'axios'

export const useRequestData = (url, auth) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const getData = () => {
    setIsLoading(true);

    axios
    .get(url, auth)
    .then((res) => {
      setIsLoading(false);
      setData(res.data);
    })
    .catch((err) => {
      setIsLoading(false);
      setError(err)
    })
  }

  useEffect(() => {
    getData()
  }, [url])

  return [data, isLoading, error, getData]
}

