import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_FIREBASE_API_KEY,
  authDomain: "leetcode-clone-4121e.firebaseapp.com",
  projectId: "leetcode-clone-4121e",
  storageBucket: "leetcode-clone-4121e.appspot.com",
  messagingSenderId: "706957573308",
  appId: "1:706957573308:web:f621796fbe124813db24b9",
  measurementId: "G-8PM3BVS5GD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();