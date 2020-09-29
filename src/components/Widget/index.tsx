import React from 'react'

import useForecast from './useForecast'
import styles from './Widget.module.css'

const Widget = () => {
  const { data, error } = useForecast()

  return (
    <div className={styles.wrapper}>
      {data ? (
        <>
          <header className={styles.header}>
            <article className={styles.article}>{data.list[0].weather}</article>
            <article className={styles.article}>{data.cityName}</article>
          </header>
          <ul className={styles.hourlyDataList}>
            {data.list.map(({ date, icon, temperature, time, weather }) => (
              <li key={`${date}-${time}`} className={styles.hourlyData}>
                <div>{time}</div>
                <div>{icon}</div>
                <div>{temperature}</div>
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
