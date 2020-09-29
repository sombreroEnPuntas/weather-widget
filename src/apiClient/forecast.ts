const endpoint = 'https://samples.openweathermap.org/data/2.5/forecast'
const defaultCity = 'M%C3%BCnchen,DE'

const formatData = (item) => ({
  date: item.dt_txt.split(' ')[0],
  icon: item.weather[0].icon,
  temperature: Math.round(parseInt(item.main.temp) - 273.15),
  time: item.dt_txt.split(' ')[1].slice(0, 5),
  weather: item.weather[0].main,
})

export interface HourlyData {
  cityName: string
  list: {
    date: string
    icon: string
    temperature: number
    time: string
    weather: string
  }[]
}
export interface ForecastByDateResponse {
  data?: HourlyData
  error?: string
}
const forecastByDate: () => Promise<ForecastByDateResponse> = async () => {
  console.log(`[${new Date()}] ::: forecastByDate request`)

  let data: HourlyData
  let error: string

  try {
    const response = await fetch(
      `${endpoint}?q=${defaultCity}&appid=${process.env.OPEN_WEATHER_MAP_APP_ID}`
    )
    const result = await response.json()

    if (result.error || result.cod !== '200')
      throw new Error(result.error || `${result.cod}: ${result.message}`)

    data = {
      cityName: result.city.name,
      list: result.list.map(formatData),
    }
    console.log(`[${new Date()}] ::: forecastByDate success`)
  } catch (e) {
    error = 'Failed to get forecast. Try again later.'
    console.log(`[${new Date()}] ::: forecastByDate failure`, e)
  }

  return { data, error }
}

export default forecastByDate
