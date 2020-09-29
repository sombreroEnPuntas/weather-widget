import React, { useState } from 'react'
import WeatherImage from '../WeatherImage'

import useForecast from './useForecast'
import styles from './Widget.module.css'

const maxTemperatureReducer = (prev, { temperature }) =>
  prev > temperature ? prev : temperature
const minTemperatureReducer = (prev, { temperature }) =>
  prev < temperature ? prev : temperature

const Widget = () => {
  const { data, error } = useForecast()
  const [current, setCurrent] = useState(0)

  return (
    <div className={styles.wrapper}>
      {data ? (
        <>
          <header className={styles.header}>
            <article className={styles.article}>
              <WeatherImage
                type={data.list[current].icon === '01d' ? '01d' : 'default'}
              />

              <div>
                <div className={styles.articleHeading}>
                  {data.list[current].weather}
                  {'  '}
                  {data.list.reduce(
                    maxTemperatureReducer,
                    data.list[0].temperature
                  )}
                  ° /
                  {data.list.reduce(
                    minTemperatureReducer,
                    data.list[0].temperature
                  )}
                  °
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
          <ul className={styles.hourlyData}>
            {data.list.map(({ date, icon, temperature, time }, index) => (
              <li className={styles.hourlyDataItem} key={`${date}-${time}`}>
                <button
                  onClick={() => setCurrent(index)}
                  data-testid={`${date}-${time}`}
                >
                  <div>{time}</div>
                  <WeatherImage type={icon === '01d' ? '01d' : 'default'} />
                  <div>{temperature}°</div>
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        error || 'loading...'
      )}
    </div>
  )
}

export default Widget
