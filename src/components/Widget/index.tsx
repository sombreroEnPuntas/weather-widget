import React, { useState } from 'react'
import WeatherImage from '../WeatherImage'
import Header from './Header'

import useForecast from './useForecast'
import styles from './Widget.module.css'

const Widget = () => {
  const { data, error } = useForecast()
  const [current, setCurrent] = useState(0)

  return (
    <div className={styles.wrapper}>
      {data ? (
        <>
          <Header current={current} data={data} />

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
