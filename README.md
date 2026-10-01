# mediConectar · healthcare UI prototype

React prototype for medical appointment workflows. The code currently provides sign-in and sign-up forms plus routes for patient, doctor and administrator profile screens. The sign-in form navigates according to the selected role; it does not verify credentials against a backend or persist accounts. Registration likewise returns to the sign-in screen without storing a user.

The repository is a UI exercise, not a deployed appointment platform or a system for real patient data.

## Stack and local setup

The app is in [`mediconectar/`](mediconectar/). Its `package.json` declares React 18, React Router 6 and Bootstrap. From that directory, run `npm install` and `npm start`. Build and test scripts are declared, but their current results have not been verified.
