import { useState } from "react";
import { deepClone } from "../utils/array";
import { useMenu } from "./useMenu";

export const useBasket = () => {
  const [basket, setBasket] = useState([]);
  const { menuProducts, setMenuProducts } = useMenu();

  const handleAddToBasket = (e, productToAdd) => {
    e.stopPropagation();

    // Recherche l'index du produit dans le panier
    const productIndex = basket.findIndex(
      (product) => product.id === productToAdd.id
    );

    // Quantité à ajouter au produit dans le panier
    const quantityToAdd = 1;

    // Si le produit est déjà dans le panier, met à jour sa quantité
    if (productIndex !== -1) {
      const basketCopy = deepClone(basket);
      basketCopy[productIndex] = {
        ...basketCopy[productIndex],
        quantity: basketCopy[productIndex].quantity + quantityToAdd,
      };
      setBasket(basketCopy);
    } else {
      // Si le produit n'est pas encore dans le panier, l'ajoute avec la quantité définie
      setBasket([...basket, { ...productToAdd, quantity: quantityToAdd }]);
    }
  };

  return {
    setBasket,
    handleAddToBasket,
  };
};
