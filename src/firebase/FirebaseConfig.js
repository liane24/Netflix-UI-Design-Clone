import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORANGE_BUCKET,
//   messagingSenderId: process.env.REACT_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_MEASUREMENT_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyD3hVvR_mHqPkJW3wzWBbxBda0qQldh1tc",
  authDomain: "netflix-application-ecedd.firebaseapp.com",
  projectId: "netflix-application-ecedd",
  storageBucket: "netflix-application-ecedd.appspot.com",
  messagingSenderId: "365931762712",
  appId: "1:365931762712:web:b853708970cd5f13279f6d",
  measurementId: "G-R9QX6KFFDZ"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);