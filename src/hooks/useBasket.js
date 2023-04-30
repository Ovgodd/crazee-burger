import { useState } from "react";
import { deepClone, findIndex, findObjectById } from "../utils/array";
import { fakeBasket } from "../fakeData/fakeBasket";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  // add product to basket
  const handleAddToBasket = (productToAdd) => {
    const basketCopy = deepClone(basket);

    const isProductAlreadyInBasket = findObjectById(productToAdd.id, basket);

    //if product is not in basket > update state with quantity of 1
    if (!isProductAlreadyInBasket) {
      AddProductThatIsNotInBasket(productToAdd, basketCopy, setBasket);
      return;
    }
    //if product is in basket > update state with quantity+1
    incrementProductAlreadyInBasket(productToAdd, basketCopy);
  };
  //delete product  from basket
  const handleDeleteToBasket = (productID) => {
    const updatedBasket = basket.filter((product) => {
      return product.id !== productID;
    });
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
