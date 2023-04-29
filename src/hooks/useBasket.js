import { useState } from "react";
import {
  deepClone,
  findObjectById,
  findIndex,
  removeObjectById,
} from "../utils/array";
import { fakeBasket } from "../fakeData/fakeBasket";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);
  // add to basket
  const handleAddToBasket = (productToAdd) => {
    const basketCopy = deepClone(basket);

    const isProductAlreadyInBasket = findObjectById(productToAdd.id, basket);

    //if product is not in basket > update state with quantity of 1
    if (!isProductAlreadyInBasket) {
      const newBasketProduct = {
        ...productToAdd,
        quantity: 1,
      };
      const basketUpdated = [newBasketProduct, ...basketCopy];
      setBasket(basketUpdated);
      //if product is  in basket > update state with quantity+1
    } else {
      const updatedBasket = basket.map((product) => {
        if (product.id === productToAdd.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
      setBasket(updatedBasket);
    }
  };
  //delete element in basket
  const handleDeleteToBasket = (productID) => {
    const basketProductCopy = deepClone(basket);

    const updatedBasket = removeObjectById(productID, basketProductCopy);

    setBasket(updatedBasket);
  };
  //change element info in basket
  const handleEditInBasket = (productBeingEdited) => {
    const basketMenuCopy = deepClone(basket);

    const productToEdit = findIndex(productBeingEdited.id, basket);

    basketMenuCopy[productToEdit] = productBeingEdited;
    setBasket(basketMenuCopy);
  };

  return {
    basket,
    setBasket,
    handleAddToBasket,
    handleDeleteToBasket,
    handleEditInBasket,
  };
};
