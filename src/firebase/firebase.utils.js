import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  doc,
} from "firebase/firestore";

const config = {
  apiKey: "AIzaSyAzIqdqukw8JfnzsUMEEyZIssXIInGQFI0",
  authDomain: "crwn-db-46c14.firebaseapp.com",
  projectId: "crwn-db-46c14",
  storageBucket: "crwn-db-46c14.appspot.com",
  messagingSenderId: "380830363438",
  appId: "1:380830363438:web:fb449854088fadeeed54bf",
  measurementId: "G-1ZSX37SSJ9",
};

const app = initializeApp(config);
const db = getFirestore(app);

async function fetchUserIdCartItems(userId) {
  const col = collection(db, "users", userId, "cartItem");
  const cartItemsDocs = await getDocs(col);

  return cartItemsDocs.docs.map((doc) => doc.data());
}

async function getUserList() {
  const col = collection(db, "users");
  const usersDocs = await getDocs(col);

  return usersDocs.docs.map((doc) => doc.data());
}

export async function fetchAllUserData() {
  var userData = [];
  const userList = await getUserList();

  userList.forEach(async (user) => {
    const userCartItems = await fetchUserIdCartItems(user.id);
    userData.push({ ...user, cartItems: userCartItems });
  });

  return userData;
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = doc(db, "users", `${userAuth.uid}`);
  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    const createdAt = new Date();
    try {
      await setDoc(userRef, {
        id: userAuth.uid,
        displayName: userAuth.displayName,
        email: userAuth.email,
        createdAt: createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = getAuth();

const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider);
};

// export default firebase;
