import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../fakeData/fakeMenu";

export const getUser = async (idUser) => {
  const docRef = doc(db, "users", idUser);

  const docSnapshot = await getDoc(docRef);
  console.log("docSnapshot: ", docSnapshot);
  if (docSnapshot.exists()) {
    const userReceived = docSnapshot.data();
    console.log("user received: ", userReceived);
    return userReceived;
  }
  return null;
};

export const createUser = async (userId) => {
  const docRef = doc(db, "users", userId);
  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()) {
    return;
  }

  const newDoc = {
    username: userId,
    menu: fakeMenu.SMALL,
  };
  setDoc(docRef, newDoc);
};
// export const authenticateUser = async (userId) => {
//   const existingUser = await getUser(userId);
//   if (!existingUser) {
//     createUser(userId);
//   }
// };
