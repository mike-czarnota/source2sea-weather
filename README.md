# Weather app
This is a simple application to check the weather in some locations. You could also check in the desired location!

You could check it out at [this link](https://sharp-haibt-02d1a4.netlify.app/).

## Use
1. `git@github.com:panczarny/source2sea-weather.git`
2. `cd source2sea`
3. `npm i`
4. Environment variables. You need to have `REACT_APP_WEATHER_API_KEY` and `REACT_APP_WEATHER_API_URL` set in your `.env` file. To do that: `cp .env.development .env` (there is an env variable that sets url for the open weather api)
5. `npm run build`
6. `npm run run`
7. Check your browser at http://localhost:3001/

## Development
1. Run steps 1 - 3 from the above
2. `npm run start`
3. Check your browser at http://localhost:3000/
4. In your IDE check that you have configured ESlint configuration (auto config)

## Approach
1. Use route based views in order to persist ui between page reloads (using `react-router`)
2. `react-fetching-library` to ease of fetching (error handling, error boundaries, hooks ready to use, etc)
3. Jest for unit and integration tests
4. `dotenv` to handle some env variables
5. Tailwind for ease of use of css
6. Proxy to handle CORS
7. Eslint & prettier for code styling

## To improve
1. Add context to store values of locations somewhere high in the component tree
2. Add e2e tests (Cypress)
3. Add some colors
4. Ensure that config for building app is optimized
5. Don't fetch data when empty custom location
6. Add some validation (e.g. minLength) to the custom location input

---

#### This app was created using [Create React App](https://github.com/facebook/create-react-app). Check below part of the documentation to know more.

## Getting Started with Create React App

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

