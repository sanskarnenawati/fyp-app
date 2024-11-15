import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDy8ziYlIomGzSpqv6IdQJxNa_lbRv7sQk",
    authDomain: "craft-trade-btech.firebaseapp.com",
    projectId: "craft-trade-btech",
    storageBucket: "craft-trade-btech.appspot.com",
    messagingSenderId: "675057507713",
    appId: "1:675057507713:web:f294bd9187df65b2f19c80",
    
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
