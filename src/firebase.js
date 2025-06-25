import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDmGc8Aw0ScKNFdAHXTjCa-vBk-3Bn6bhA",
  authDomain: "tripixel-auth.firebaseapp.com",
  projectId: "tripixel-auth",
  storageBucket: "tripixel-auth.firebasestorage.app",
  messagingSenderId: "87880164612",
  appId: "1:87880164612:web:d78ec4599b604938411c51",
  measurementId: "G-7WLLM1PM0N"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
