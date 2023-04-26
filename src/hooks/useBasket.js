import { useState } from "react";
import { deepClone } from "../utils/array";
import { fakeBasket } from "../fakeData/fakeBasket";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.SMALL);

  const handleAddToBasket = (productToAdd) => {
    console.log(productToAdd);
    const basketCopy = deepClone(basket);

    const isProductAlreadyInBasket = basket.find(
      (product) => product.id === productToAdd.id
    );
    console.log(isProductAlreadyInBasket);

    if (!isProductAlreadyInBasket) {
      const newBasketProduct = {
        ...productToAdd,
        quantity: 1,
      };

      const basketUpdated = [newBasketProduct, ...basketCopy];

      setBasket(basketUpdated);
    }

    const updatedBasket = [productToAdd, ...basketCopy];
    setBasket(updatedBasket);
  };

  return {
    basket,
    setBasket,
    handleAddToBasket,
  };
};
