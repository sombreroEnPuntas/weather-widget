import React from 'react'

// eventually we will have all the possible icons, abstracted for extending :v
const weatherImages = {
  '01d': { alt: 'clear sky', src: '/weather-sun.svg' },
  default: { alt: 'cloudy sky', src: '/weather-cloud.svg' },
}
interface Props {
  type: keyof typeof weatherImages
}
const WeatherImage = ({ type }: Props) => (
  <img width={75} height={75} {...weatherImages[type]} />
)

export default WeatherImage
