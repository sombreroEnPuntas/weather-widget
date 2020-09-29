import React from 'react'

import { HourlyData } from '../../apiClient/forecast'
import WeatherImage from '../WeatherImage'
import styles from './Header.module.css'

const maxTemperatureReducer = (prev, { temperature }) =>
  prev > temperature ? prev : temperature
const minTemperatureReducer = (prev, { temperature }) =>
  prev < temperature ? prev : temperature

interface Props {
  current: number
  data: HourlyData
}
const Header = ({ current, data }: Props) => (
  <header className={styles.header}>
    <article className={styles.article}>
      <WeatherImage
        type={data.list[current].icon === '01d' ? '01d' : 'default'}
      />

      <div>
        <div className={styles.articleHeading}>
          {data.list[current].weather}
          {'  '}
          {data.list.reduce(maxTemperatureReducer, data.list[0].temperature)}° /
          {data.list.reduce(minTemperatureReducer, data.list[0].temperature)}°
        </div>
        <div
          data-testid="articleOverlineBig"
          className={styles.articleOverlineBig}
        >
          {data.list[current].temperature}°
        </div>
      </div>
    </article>
    <article className={styles.article}>
      <div>
        <div className={styles.articleHeading}>{data.cityName}</div>
        <div className={styles.articleOverline}>
          <span style={{ whiteSpace: 'pre-line' }}>
            {new Date(data.list[current].timestamp * 1000)
              .toLocaleDateString('de-DE', {
                weekday: 'long',
                month: 'long',
                day: 'numeric',
              })
              .replace(',', '\n')}
          </span>
        </div>
      </div>
    </article>
  </header>
)

export default Header
