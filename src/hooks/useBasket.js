import { useState } from "react";
import { deepClone } from "../utils/array";
import { fakeBasket } from "../fakeData/fakeBasket";

export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleAddToBasket = (productToAdd) => {
    console.log(productToAdd);
    const basketCopy = deepClone(basket);

    const isProductAlreadyInBasket = basket.find(
      (product) => product.id === productToAdd.id
    );
    console.log(
      `product in basket ?  ${JSON.stringify(isProductAlreadyInBasket)}`
    );

    if (!isProductAlreadyInBasket) {
      const newBasketProduct = {
        ...productToAdd,
        quantity: 1,
      };
      const basketUpdated = [newBasketProduct, ...basketCopy];
      setBasket(basketUpdated);
    } else {
      const updatedBasket = basket.map((product) => {
        if (product.id === productToAdd.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
      setBasket(updatedBasket);
    }
    console.log(`product now in basket   ${JSON.stringify(basket)}`);
  };
  const handleDeleteToBasket = (productID) => {
    const updatedBasket = basket.filter((product) => {
      return product.id !== productID;
    });
    setBasket(updatedBasket);
  };

  return {
    basket,
    setBasket,
    handleAddToBasket,
    handleDeleteToBasket,
  };
};
