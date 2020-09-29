import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { HourlyData } from '../../apiClient/forecast'

const useForecast = () => {
  const router = useRouter()
  const [data, setData] = useState<HourlyData>()
  const [error, setError] = useState<string>()

  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch(router.basePath + `/api/forecast`)
        const result = await response.json()

        setData(result.data)
        setError(result.error)
      } catch (e) {
        setData(undefined)
        setError('Server error. Try again later.')
      }
    })()
  }, [])

  return { data, error }
}

export default useForecast
