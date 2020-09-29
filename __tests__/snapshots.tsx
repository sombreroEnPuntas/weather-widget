import { render } from '@testing-library/react'
import React from 'react'

// pages
import Index from '../pages/index'

// deps
import useForecast from '../src/components/Widget/useForecast'

// utils
import {
  forecastByDateFailureMock,
  forecastByDateSuccessMock,
} from '../src/utils/mocks'

// Mocks
jest.mock('../src/components/Widget/useForecast')

// Mock data
const setMock = ({ forecastData }) => {
  ;(useForecast as jest.Mock).mockImplementation(() => forecastData)
}

describe.each`
  Case         | forecastData
  ${'error'}   | ${forecastByDateFailureMock}
  ${'data'}    | ${forecastByDateSuccessMock}
  ${'loading'} | ${{}}
`('$Case', ({ forecastData }) => {
  test('snapshot', () => {
    setMock({ forecastData })
    const { container } = render(<Index />)

    expect(container).toMatchSnapshot()
  })
})
