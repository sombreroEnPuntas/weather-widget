// Tested Unit
import forecastByDate from './forecast'

// Utils
import {
  forecastByDateSuccessMock,
  openWeatherMockFailure,
  openWeatherMockSuccess,
} from '../utils/mocks'

// Mock data
const setMock = ({ resolve = null, reject = null } = {}) => {
  ;(global.fetch as jest.Mock) = jest.fn(() =>
    reject
      ? Promise.reject(reject)
      : Promise.resolve({
          json: () => Promise.resolve(resolve),
        })
  )
  // no need to assert the logs, but it is possible :)
  ;(global.console.log as jest.Mock) = jest.fn()
}

describe('forecastByDate', () => {
  it('works', () => {
    setMock({ resolve: openWeatherMockSuccess })
    expect.assertions(1)
    return expect(forecastByDate()).resolves.toEqual(forecastByDateSuccessMock)
  })

  it('handles API errors', () => {
    setMock({ resolve: openWeatherMockFailure })
    expect.assertions(1)
    return expect(forecastByDate()).resolves.toEqual({
      data: undefined,
      error: 'Failed to get forecast. Try again later.',
    })
  })

  it('handles Network errors', () => {
    setMock({
      reject: Error(`418: The resulting entity body MAY be short and stout.`),
    })
    expect.assertions(1)
    return expect(forecastByDate()).resolves.toEqual({
      data: undefined,
      error: 'Failed to get forecast. Try again later.',
    })
  })
})
