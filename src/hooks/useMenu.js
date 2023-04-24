import { useState } from "react";
import { fakeMenu } from "../fakeData/fakeMenu";
import { deepClone } from "../utils/array";

export const useMenu = () => {
  const [menuProducts, setMenuProducts] = useState(fakeMenu.MEDIUM);

  const handleDelete = (id) => {
    const updatedMenu = menuProducts.filter((menu) => {
      return menu.id !== id;
    });
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

    const indexOfProductToEdit = menuProducts.findIndex(
      (product) => product.id === productBeingEdited.id
    );

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
