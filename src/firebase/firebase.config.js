// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
<<<<<<< HEAD
import { getAnalytics } from "firebase/analytics";
=======
>>>>>>> edc1c29af950c9b3e41ed72a868789af9340414f
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
<<<<<<< HEAD
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
=======
>>>>>>> edc1c29af950c9b3e41ed72a868789af9340414f
const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
<<<<<<< HEAD
    appId: import.meta.env.VITE_appId,
    measurementId: import.meta.env.VITE_measurementId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
=======
    appId: import.meta.env.VITE_appId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
>>>>>>> edc1c29af950c9b3e41ed72a868789af9340414f
