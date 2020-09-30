import React from 'react'

// eventually we will have all the possible icons, abstracted for extending :v
const weatherImages = {
  '01d': { alt: 'clear sky', src: '/weather-sun.svg' },
  default: { alt: 'cloudy sky', src: '/weather-cloud.svg' },
}
interface Props {
  className?: string
  type: keyof typeof weatherImages
}
const WeatherImage = ({ className, type }: Props) => (
  <img
    className={className}
    height="100%"
    width="100%"
    {...weatherImages[type]}
  />
)

export default WeatherImage
