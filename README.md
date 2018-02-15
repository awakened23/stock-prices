This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn install or npm install`

Installs the project dependencies.

### `yarn start or npm run start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test or npm test`

Launches the test runner in the interactive watch mode.

### `yarn build or npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Setting up a mock server

Run the following command in the project directory to start json-server:

```
npx json-server --watch db.json --port 3005
```

This will make json-server listen to http://localhost:3005/stockPrices as configured in db.json.

By default, the application is sending a Get request to http://localhost:3005/stockPrices. This can be overriden by setting an environment variable called REACT_APP_API_PATH before the application is started or built. For example:

```
REACT_APP_API_PATH=http://localhost:3005/stockPrices yarn start
```
