// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBYdCk5sGPcRan8StMrzT5HF__Z2d5VLpI',
  authDomain: 'user-email-password-auth-6f559.firebaseapp.com',
  projectId: 'user-email-password-auth-6f559',
  storageBucket: 'user-email-password-auth-6f559.appspot.com',
  messagingSenderId: '263181488056',
  appId: '1:263181488056:web:621d5f19ba92ad466c494d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
