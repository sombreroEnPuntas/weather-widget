import React, { useState } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'

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

          <ScrollContainer className={styles.hourlyData} component="ul">
            {data.list.map(({ date, icon, temperature, time }, index) => (
              <li className={styles.hourlyDataItem} key={`${date}-${time}`}>
                <button
                  className={styles.button}
                  data-testid={`${date}-${time}`}
                  onClick={() => setCurrent(index)}
                >
                  <div className={styles.title}>{time}</div>
                  <WeatherImage
                    className={styles.image}
                    type={icon === '01d' ? '01d' : 'default'}
                  />
                  <div className={styles.content}>{temperature}°</div>
                </button>
              </li>
            ))}
          </ScrollContainer>
        </>
      ) : (
        error || 'loading...'
      )}
    </div>
  )
}

export default Widget
