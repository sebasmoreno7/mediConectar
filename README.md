# mediConectar · healthcare UI prototype

React prototype for medical appointment workflows. It lets visitors select a patient or doctor demo view and includes an administrator screen. It has no backend, authentication, account registration or persistence. The demo does not ask for credentials or personal details.

The repository is a UI exercise, not a deployed appointment platform or a system for real patient data. Do not enter real patient information.

## Stack and local setup

The app is in [`mediconectar/`](mediconectar/). Its `package.json` declares React 18, React Router 6 and Bootstrap. From that directory, run `npm ci` and `npm start`. Run `CI=true npm test -- --watch=false --runInBand` for tests and `npm run build` for a production build.
