import { useEffect, useState } from "react";
import {
  deepClone,
  findIndex,
  findObjectById,
  removeObjectById,
} from "../utils/array";
import { fakeBasket } from "../fakeData/fakeBasket";

export const useBasket = () => {
  const [basket, setBasket] = useState(() => {
    const storedBasket = localStorage.getItem("items");
    return storedBasket ? JSON.parse(storedBasket) : fakeBasket.EMPTY;
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(basket));
    console.log(basket);
  }, [basket]);

  // add product in basket
  const handleAddToBasket = (productToAdd) => {
    const basketCopy = deepClone(basket);

    const isProductAlreadyInBasket = findObjectById(productToAdd.id, basket);

    //if product is not in basket > add the current selectionate product
    if (!isProductAlreadyInBasket) {
      AddProductThatIsNotInBasket(productToAdd, basketCopy, setBasket);
      return;
    }
    //if product is in basket > add +1 on the current selectionnate product
    incrementProductAlreadyInBasket(productToAdd, basketCopy);
  };
  //delete product in basket
  const handleDeleteToBasket = (productID) => {
    const updatedBasket = removeObjectById(productID, basket);
    setBasket(updatedBasket);
  };

  const incrementProductAlreadyInBasket = (productToAdd, basketCopy) => {
    const basketProductToIncrement = findIndex(productToAdd.id, basketCopy);
    basketCopy[basketProductToIncrement].quantity += 1;
    setBasket(basketCopy);
  };

  const AddProductThatIsNotInBasket = (productToAdd, basketCopy, setBasket) => {
    const newBasketProduct = {
      ...productToAdd,
      quantity: 1,
    };
    const basketUpdated = [newBasketProduct, ...basketCopy];
    setBasket(basketUpdated);
  };
  return {
    basket,
    setBasket,
    handleAddToBasket,
    handleDeleteToBasket,
  };
};
