import { useState } from "react";
import { deepClone } from "../utils/array";
import { useMenu } from "./useMenu";

export const useBasket = () => {
  const [basket, setBasket] = useState([]);
  const { menuProducts } = useMenu();

  const handleAddToBasket = (e, productToAdd) => {
    e.stopPropagation();
    console.log(productToAdd);
    setBasket(deepClone(menuProducts));
  };

  return {
    setBasket,
    handleAddToBasket,
  };
};
