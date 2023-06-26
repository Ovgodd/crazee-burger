import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone, findIndex, removeObjectById } from "../utils/array";
import { syncBothMenu } from "../api/product";

export const useMenu = () => {
  const [menuProducts, setMenuProducts] = useState(undefined);

  const handleDelete = (idProductToDelete, username, updatedMenu) => {
    const menuCopy = deepClone(menuProducts);

    const menuUpdated = removeObjectById(idProductToDelete, menuCopy);

    setMenuProducts(menuUpdated);
    syncBothMenu(username, menuUpdated);
  };

  const handleAdd = (productToAdd, username) => {
    const menuCopy = deepClone(menuProducts);

    const updatedMenu = [productToAdd, ...menuCopy];

    setMenuProducts(updatedMenu);
    syncBothMenu(username, updatedMenu);
  };

  const handleReset = (username) => {
    setMenuProducts(fakeMenu.SMALL);
    syncBothMenu(username, fakeMenu.SMALL);
  };

  const handleEdit = (productBeingEdited) => {
    const menuCopy = deepClone(menuProducts);

    const indexOfProductToEdit = findIndex(productBeingEdited.id, menuCopy);

    // const editedProduct = {
    //   ...productBeingEdited,
    //   price: replaceFrenchCommaWithDot(formatPrice(productBeingEdited.price)),
    // }; rien a faire ici.( pas a mettre dans useMenu >> to EditProductForm)
    menuCopy[indexOfProductToEdit] = productBeingEdited;

    setMenuProducts(menuCopy);
  };

  return {
    handleAdd,
    handleReset,
    handleEdit,
    handleDelete,
    setMenuProducts,
    menuProducts,
  };
};
