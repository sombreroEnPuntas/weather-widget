import React from 'react'

// eventually we will have all the possible icons, abstracted for extending :v
const weatherImages = {
  '01d': { alt: 'clear sky', src: '/weather-sun.svg' },
  default: { alt: 'cloudy sky', src: '/weather-cloud.svg' },
}
interface Props {
  size?: number
  type: keyof typeof weatherImages
}
const WeatherImage = ({ size = 75, type }: Props) => (
  <img width={size} height={size} {...weatherImages[type]} />
)

export default WeatherImage
