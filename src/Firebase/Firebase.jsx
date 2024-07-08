import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  collection,
  getDocs,
  getFirestore,
  where,
  addDoc,
  query,
} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userDocRef, setUserDocRef] = useState(null);

  useEffect(() => {
    const savedUserDocRef = sessionStorage.getItem("userDocRef");
    if (savedUserDocRef) {
      setUserDocRef(JSON.parse(savedUserDocRef));
    }
  }, []);

  useEffect(() => {
    if (userDocRef !== null) {
      sessionStorage.setItem("userDocRef", JSON.stringify(userDocRef));
    }
  }, [userDocRef]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        await handleUser(currentUser);
      } else {
        setUser(null);
        setUserDocRef(null);
        sessionStorage.removeItem("userDocRef");
      }
    });

    return () => unsubscribe();
  }, []);
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    await handleUser(result.user);
  };

  const isLoggedIn = user !== null;

  const Logout = () => signOut(auth);

  const handleUserDocRef = (docRef) => setUserDocRef(docRef);

  const handleUser = async (userData) => {
    const collectionRef = collection(database, "users");
    const q = query(collectionRef, where("email", "==", userData.email));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      const docRef = await addDoc(collectionRef, {
        email: userData.email,
        photoURL: userData.photoURL,
        userID: userData.uid,
        userName: userData.displayName,
      });
      handleUserDocRef(docRef.id);
    } else {
      const docSnapShot = querySnapshot.docs[0];
      handleUserDocRef(docSnapShot.id);
    }
  };

  const formatOrderTime = (timestamp) => {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };

  const savePrediction = async (predictionResponse) => {
    const collectionRef = collection(database, "users", userDocRef, "history");
    const resultObject = await addDoc(collectionRef, {
      MoodPrediction: predictionResponse,
      Time: formatOrderTime(Date.now()),
    });
    return resultObject;
  };

  const fetchPrediction = async () => {
    const collectionRef = collection(database, "users", userDocRef, "history");
    const res = await getDocs(collectionRef);
    return res;
  };

  return (
    <FirebaseContext.Provider
      value={{
        signInWithGoogle,
        Logout,
        savePrediction,
        fetchPrediction,
        isLoggedIn,
        auth,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
