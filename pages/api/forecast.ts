import { NextApiRequest, NextApiResponse } from 'next'

import forecastByDate, {
  ForecastByDateResponse,
} from '../../src/apiClient/forecast'

export default async (
  _: NextApiRequest,
  res: NextApiResponse<ForecastByDateResponse>
) => {
  // server side req to bypass cors
  const data = await forecastByDate()
  res.status(200).json(data)
}
