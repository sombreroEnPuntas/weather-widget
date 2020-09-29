export const forecastByDateFailureMock = {
  data: undefined,
  error: '418: The resulting entity body MAY be short and stout.',
}

export const forecastByDateSuccessMock = {
  data: {
    cityName: 'Rivendell',
    list: [
      {
        date: '2020-09-29',
        icon: '04n',
        temperature: 13,
        time: '11:00',
        weather: 'Cloudy',
      },
      {
        date: '2020-09-29',
        icon: '01d',
        temperature: 12,
        time: '12:00',
        weather: 'Clear',
      },
    ],
  },
  error: undefined,
}

export const openWeatherMockFailure = {
  cod: 401,
  message:
    'Invalid API key. Please see http://openweathermap.org/faq#error401 for more info.',
}

export const openWeatherMockSuccess = {
  cod: '200',
  message: 0.0032,
  cnt: 36,
  list: [
    {
      dt: 1487246400,
      main: {
        temp: 286.67,
        temp_min: 281.556,
        temp_max: 286.67,
        pressure: 972.73,
        sea_level: 1046.46,
        grnd_level: 972.73,
        humidity: 75,
        temp_kf: 5.11,
      },
      weather: [
        { id: 800, main: 'Cloudy', description: 'some clouds', icon: '04n' },
      ],
      clouds: { all: 60 },
      wind: { speed: 1.81, deg: 247.501 },
      sys: { pod: 'd' },
      dt_txt: '2020-09-29 11:00:00',
    },
    {
      dt: 1487257200,
      main: {
        temp: 285.66,
        temp_min: 281.821,
        temp_max: 285.66,
        pressure: 970.91,
        sea_level: 1044.32,
        grnd_level: 970.91,
        humidity: 70,
        temp_kf: 3.84,
      },
      weather: [
        { id: 800, main: 'Clear', description: 'clear sky', icon: '01d' },
      ],
      clouds: { all: 0 },
      wind: { speed: 1.59, deg: 290.501 },
      sys: { pod: 'd' },
      dt_txt: '2020-09-29 12:00:00',
    },
  ],
  city: {
    id: 6940463,
    name: 'Rivendell',
    coord: { lat: 48.137, lon: 11.5752 },
    country: 'none',
  },
}
