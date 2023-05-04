import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone, findIndex, removeObjectById } from "../utils/array";

export const useMenu = () => {
  const [menuProducts, setMenuProducts] = useState(fakeMenu.MEDIUM);

  const handleDelete = (id) => {
    const updatedMenu = removeObjectById(id, menuProducts);
    setMenuProducts(updatedMenu);
  };

  const handleAdd = (productToAdd) => {
    const menuCopy = deepClone(menuProducts);

    const updatedMenu = [productToAdd, ...menuCopy];

    setMenuProducts(updatedMenu);
  };

  const handleReset = () => {
    setMenuProducts(fakeMenu.MEDIUM);
  };

  const handleEdit = (productBeingEdited) => {
    const menuCopy = deepClone(menuProducts);

    const indexOfProductToEdit = findIndex(productBeingEdited.id, menuCopy);

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
