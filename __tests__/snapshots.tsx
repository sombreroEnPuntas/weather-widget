import React from 'react'
import { render, fireEvent } from '@testing-library/react'

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
`('Side effect: $Case', ({ forecastData }) => {
  test('snapshot', () => {
    setMock({ forecastData })
    const { container } = render(<Index />)

    expect(container).toMatchSnapshot()
  })
})

describe('Interactions', () => {
  test('reacts to choosing an element', () => {
    setMock({ forecastData: forecastByDateSuccessMock })
    const { getByTestId } = render(<Index />)
    expect(getByTestId('articleOverlineBig')).toHaveTextContent('13°')

    const button = getByTestId('2020-09-29-12:00')
    fireEvent.click(button)

    expect(getByTestId('articleOverlineBig')).toHaveTextContent('12°')
  })
})
