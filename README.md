### `npm storybook`

Runs Storybook.

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

### `memo`

- Reactv18
  - VFCはdeprecatedになり、Propsにchildrenは不要
- CSS
  - CSS Modulesが気に入った&公式以外にpackage追加してまで導入したくないのが理由
    - CSS in JSはレンダリングに多少影響もあり、packgeも外部追加しないといけない
- typescript
  - [重要]4.8>=だとDeprecationWarningが大量に出るので、4.8未満にしている
- library build
  - TODO vite