import { useState } from "react";
import { deepClone } from "../utils/array";

export const useBasket = () => {
  const [basket, setBasket] = useState([]);

  const handleAddToBasket = (productToAdd) => {
    console.log(productToAdd);

    const basketCopy = deepClone(basket);

    const updatedBasket = [productToAdd, ...basketCopy];

    setBasket(updatedBasket);
    console.log(basket);
  };

  return {
    basket,
    setBasket,
    handleAddToBasket,
  };
};
