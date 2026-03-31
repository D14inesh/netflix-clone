// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut} from "firebase/auth";
import {addDoc,
    collection,
    getFirestore} from "firebase/firestore";
import { toast } from "react-toastify";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKF4Wh1MXF5XLwsxmsT4vHcEVW7AppX_0",
  authDomain: "netflix-clone-84ef2.firebaseapp.com",
  projectId: "netflix-clone-84ef2",
  storageBucket: "netflix-clone-84ef2.firebasestorage.app",
  messagingSenderId: "455667613245",
  appId: "1:455667613245:web:ade620bd1cf32e2f60f454",
  measurementId: "G-KXY02SJ5DM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email, password) => {
    try {
       const res =await createUserWithEmailAndPassword(auth,email,password);
       const user = res.user;
       await addDoc(collection(db,"users"),{
        uid: user.uid,
        name,
        authProvider:"local",
        email,
        
       })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}


const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
}

const logout =()=>{
   signOut(auth);
}

export {auth,db,signup,login,logout};