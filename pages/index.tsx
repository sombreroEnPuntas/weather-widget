import Link from 'next/link'

import Widget from '../src/components/Widget'

const Index = () => (
  <>
    <h3>{'weather-widget'}</h3>
    <pre>
      <Link href="https://github.com/sombreroEnPuntas/weather-widget">
        {'Check the code on github!'}
      </Link>
    </pre>

    <Widget />
  </>
)

export default Index
