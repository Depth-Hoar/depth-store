import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB8izoFLgAG1ypDlm9LEATjSYUyRXD-l28",
  authDomain: "crwn-clothing-db-652f0.firebaseapp.com",
  projectId: "crwn-clothing-db-652f0",
  storageBucket: "crwn-clothing-db-652f0.appspot.com",
  messagingSenderId: "165712131694",
  appId: "1:165712131694:web:df87a09323a36ce22b987f"

};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
