# Netflix Clone

This project is a clone of the famous binge-watching app Netflix, built using ReactJS, Tailwind CSS, and Firebase. The application replicates the Netflix user interface.

## Features

- User authentication with Firebase
- Browse for movies and TV shows
- Responsive design with Tailwind CSS

## Tech Stack

- ReactJS
- Tailwind CSS
- Firebase

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed on your system.
- Firebase account for authentication and database services.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/nagakushal786/React-Netflix-Clone.git
    cd netflix-clone
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up Firebase:**

    - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
    - Enable Authentication and Firestore Database.
    - Add your Firebase config to a `.env` file in the root of the project:

    ```env
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id
    ```

### Running the Project

1. **Start the development server:**

    ```bash
    npm start
    ```

    This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

2. **Build the project for production:**

    ```bash
    npm run build
    ```

    This will build the app for production to the `build` folder.

### Deployment

You can deploy the app using any static site hosting service. Some popular options include Firebase Hosting, Vercel, and Netlify.

To deploy on Firebase Hosting:

1. **Install Firebase CLI:**

    ```bash
    npm install -g firebase-tools
    ```

2. **Login to Firebase:**

    ```bash
    firebase login
    ```

3. **Initialize Firebase in your project:**

    ```bash
    firebase init
    ```

4. **Deploy the project:**

    ```bash
    firebase deploy
    ```

## Acknowledgments

- [Netflix](https://www.netflix.com) for the inspiration.
- [ReactJS](https://reactjs.org) for the framework.
- [Tailwind CSS](https://tailwindcss.com) for the styling.
- [Firebase](https://firebase.google.com) for the backend services.