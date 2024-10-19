import { FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";
// @ts-ignore
import { Auth, getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";

import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDtfpqaD0EDbjxtivYvL3t_RJ9vI5dVqZM",
  authDomain: "fiap-3f19a.firebaseapp.com",
  projectId: "fiap-3f19a",
  storageBucket: "fiap-3f19a.appspot.com",
  messagingSenderId: "211755839362",
  appId: "1:211755839362:web:3d7cb53c4bd07aa866a99b"
};

let app: FirebaseApp
let auth: Auth

if (!getApps().length) {
    app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
        persistence: getReactNativePersistence(ReactNativeAsyncStorage)
    })

} else {
    app = getApp()
    auth = getAuth(app)
}

export { app, auth }