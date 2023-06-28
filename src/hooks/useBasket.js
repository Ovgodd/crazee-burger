import { useState } from "react";
import {
  deepClone,
  findIndex,
  findObjectById,
  removeObjectById,
} from "../utils/array";
import { setLocalStorage } from "../utils/Window";

export const useBasket = () => {
  const [basket, setBasket] = useState([]);

  // add product in basket
  const handleAddToBasket = (productToAdd, username) => {
    const basketCopy = deepClone(basket);

    const isProductAlreadyInBasket = findObjectById(productToAdd.id, basket);

    //if product is not in basket > add the current selectionate product
    if (!isProductAlreadyInBasket) {
      AddProductThatIsNotInBasket(
        productToAdd,
        basketCopy,
        setBasket,
        username
      );
      return;
    }
    //if product is in basket > add +1 on the current selectionnate product
    incrementProductAlreadyInBasket(productToAdd, basketCopy, username);
  };
  //delete product in basket
  const handleDeleteToBasket = (productID, username) => {
    const updatedBasket = removeObjectById(productID, basket);
    setBasket(updatedBasket);
    setLocalStorage(username, updatedBasket);
  };

  const incrementProductAlreadyInBasket = (
    productToAdd,
    basketCopy,
    username
  ) => {
    const basketProductToIncrement = findIndex(productToAdd.id, basketCopy);
    basketCopy[basketProductToIncrement].quantity += 1;
    setBasket(basketCopy);
    setLocalStorage(username, basketCopy);
  };

  const AddProductThatIsNotInBasket = (
    productToAdd,
    basketCopy,
    setBasket,
    username
  ) => {
    const newBasketProduct = {
      ...productToAdd,
      quantity: 1,
    };
    const basketUpdated = [newBasketProduct, ...basketCopy];
    setBasket(basketUpdated);
    setLocalStorage(username, basketUpdated);
  };
  return {
    basket,
    setBasket,
    handleAddToBasket,
    handleDeleteToBasket,
  };
};
