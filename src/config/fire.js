import firebase from 'firebase';
import * as fireKey from './firebase-keys';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: fireKey.API_KEY,
    authDomain: fireKey.AUTH_DOMAIN,
    projectId: fireKey.PROJECT_ID,
    storageBucket: fireKey.STORAGE_BUCKET,
    messagingSenderId: fireKey.MESSAGIN_SENDER_ID,
    appId: fireKey.APP_ID
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;