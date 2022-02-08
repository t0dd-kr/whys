import { initializeApp } from 'firebase/app';
import { getDatabase, set as _set, ref as _ref, onValue as _onValue, child, push as _push } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

const { 
  VITE_APP_FIREBASE_API_KEY, 
  VITE_APP_FIREBASE_DATABASE_URL,
  VITE_APP_FIREBASE_PROJECT_ID,
  VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  VITE_APP_FIREBASE_APP_ID,
  VITE_APP_FIREBASE_AUTH_DOMAIN,
  VITE_APP_FIREBASE_MEASUREMENT_ID,
  VITE_APP_FIREBASE_STORAGE_BUCKET,
} = import.meta.env

const firebaseConfig = {
  apiKey: VITE_APP_FIREBASE_API_KEY,
  authDomain: VITE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: VITE_APP_FIREBASE_DATABASE_URL,
  projectId: VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: VITE_APP_FIREBASE_STORAGE_BUCKET,
  appId: VITE_APP_FIREBASE_APP_ID,
  messagingSenderId: VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  measurementId: VITE_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

function ref(path) {
  return _ref(db, path);
}

export function set(path, data) {
  _set(ref(path), data)
}

export function push(path, data) {
  let newKey = _push(child(ref(), path)).key

  set(`${path}/${newKey}`, data)
  
  return newKey
}

export function onValue(path, callback) {
  _onValue(ref(path), callback)
}

