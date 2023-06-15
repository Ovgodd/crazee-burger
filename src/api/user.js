import { deleteDoc, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/array";

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
    menu: fakeMenu.LARGE,
  };
  setDoc(docRef, newDoc);
};

// export const updateItem = async (userId, menu) => {
//   const docRef = doc(db, "users", userId);

//   const data = {
//     username: userId,
//     menu: menu,
//   };

//   await updateDoc(docRef, data)
//     .then((docRef) => {
//       console.log("Value of an Existing Document Field has been updated");
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

export const deleteItem = async (userId, itemId) => {
  const docRef = doc(db, "users", userId.username);

  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()) {
    const user = docSnapshot.data();
    const updatedMenu = user.menu.filter((item) => item.id !== itemId);
    //user Array utils
    await updateDoc(docRef, { menu: updatedMenu });
  }
};

export const addItem = async (userId, newItem) => {
  const docRef = doc(db, "users", userId);

  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()) {
    const user = docSnapshot.data();
    const updatedMenu = [...user.menu, newItem];
    //user Array utils ( deepClone )
    try {
      await updateDoc(docRef, { menu: updatedMenu });
      console.log("Document updated successfully in Firestore.");
    } catch (error) {
      console.log("Error updating document:", error);
    }
  }
  //PENSER A AJOUTER EN BDD LA VALEUR PAR DEFAULT DE GENERATION > LARGE
};
