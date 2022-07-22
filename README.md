## How to start the project

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Run the tests

To run the tests run:

```bash
npm run test
# or
yarn test
```

## Project choices

- Typescript for types code and hinting when using components
- Nextjs to allow for easy SSR and build in routing
- Next-http-proxy-middleware to proxy the Ing api and allow more freedom with the data
- Styled-components to allow to easy styling and the usage of component props to set stlyes
- React-Testing-library to build tests to check the code
- Msw to allow for mocking of the api within the tests

## Future improvements

- Live updates on the StockDetail pages
- E2E tests
- Add in filters
- Add in a search option