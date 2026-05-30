import {
  initializeApp
} from 'firebase/app'

import {
  getAuth
} from 'firebase/auth'

import {
  getFirestore
} from 'firebase/firestore'

const firebaseConfig = {

  apiKey:
    "AIzaSyARZpKp5K7Xe3CjvGwkFCVy9JQfh6GU9gQ",

  authDomain:
    "romario-store.firebaseapp.com",

  projectId:
    "romario-store",

  storageBucket:
    "romario-store.firebasestorage.app",

  messagingSenderId:
    "545745448574",

  appId:
    "1:545745448574:web:59c9c068ac45359043f22f"
}

/* APP */

const app =
  initializeApp(firebaseConfig)

/* AUTH */

export const auth =
  getAuth(app)

/* FIRESTORE */

export const db =
  getFirestore(app)

export default app