import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const syncBothMenu = (userId, menuUpdated) => {
  const cachette = doc(db, "users", userId);

  const nourriture = {
    username: userId,
    menu: menuUpdated,
  };
  setDoc(cachette, nourriture);
};

// export const deleteItem = async (userId, itemId) => {
//   const docRef = doc(db, "users", userId.username);

//   const docSnapshot = await getDoc(docRef);
//   if (docSnapshot.exists()) {
//     const user = docSnapshot.data();
//     const updatedMenu = user.menu.filter((item) => item.id !== itemId);
//     //user Array utils
//     try {
//       await updateDoc(docRef, { menu: updatedMenu });
//       console.log("Document deleted successfully in Firestore.");
//     } catch (error) {
//       console.log("Error updating document:", error);
//     }
//   }
// };

// export const addItem = async (userId, newItem) => {
//   const docRef = doc(db, "users", userId);

//   const docSnapshot = await getDoc(docRef);
//   if (docSnapshot.exists()) {
//     const user = docSnapshot.data();
//     const updatedMenu = [...user.menu, newItem];
//     //user Array utils ( deepClone )
//     try {
//       await updateDoc(docRef, { menu: updatedMenu });
//       console.log("Document updated successfully in Firestore.");
//     } catch (error) {
//       console.log("Error updating document:", error);
//     }
//   }
// };
