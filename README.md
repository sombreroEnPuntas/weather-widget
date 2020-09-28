# weather-widget

Try it out on [`Vercel`](https://weather-widget-neon.vercel.app/)!

[![Maintainability](https://api.codeclimate.com/v1/badges/dec2c5d6c1aac26f5b24/maintainability)](https://codeclimate.com/github/sombreroEnPuntas/weather-widget/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/dec2c5d6c1aac26f5b24/test_coverage)](https://codeclimate.com/github/sombreroEnPuntas/weather-widget/test_coverage)

Weather forecast widget.

**NOTE: Requirements [here](assignment.pdf)**

## Scripts

This is a [Next.js](https://nextjs.org/) project.

The following scripts are available:

```js
yarn lint   // run tsc, eslint & prettier code checks
yarn test   // run tests (unit & integration)
yarn dev    // starts dev server locally, with hot reload
yarn build  // generate PRD bundle
yarn start  // starts PRD server
```

## Service

There's an API service to provide forecast data: [openweathermap.org](https://openweathermap.org/forecast5).

## CI

- `husky` enforces commit sanity locally
- `codeclimate` static analysis prevents accumulating technical debt
- pushing a commit triggers tests on github workflows
- PRs get automated reviews: comments and checks from codeclimate 🤖
- Merges to `master` branch and PRs will trigger deploys on `Vercel` envs

## Web app

There's a web app deployed as a [Vercel app](https://weather-widget-neon.vercel.app/), matching latest master, and envs are created for new PRs.
