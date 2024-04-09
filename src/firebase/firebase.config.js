import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_LH_APIKEY,
  authDomain: import.meta.env.VITE_LH_AUTHDOMAIN,
  projectId: import.meta.env.VITE_LH_PROJECTID,
  storageBucket: import.meta.env.VITE_LH_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_LH_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_LH_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;