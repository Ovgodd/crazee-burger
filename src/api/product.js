import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const syncBothMenu = (userId, menuUpdated) => {
  const chest = doc(db, "users", userId);

  const treasure = {
    username: userId,
    menu: menuUpdated,
  };
  setDoc(chest, treasure);
};

export const getMenu = async (idUser) => {
  const docRef = doc(db, "users", idUser);

  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()) {
    const { menu } = docSnapshot.data();
    console.log("user received: ", menu);
    return menu;
  }
};
