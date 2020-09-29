import React from 'react'

import useForecast from './useForecast'

const Widget = () => {
  const { data, error } = useForecast()

  return (
    <div
      style={{
        position: 'relative',
        /* UI / Background / Darker */
        background: '#262A59',
        /* Typography / Font / Inverted */
        color: '#FFFFFF',
      }}
    >
      {(data && JSON.stringify(data)) || error || 'loading...'}
    </div>
  )
}

export default Widget
