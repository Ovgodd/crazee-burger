import React from "react";
import EmptyBasket from "./EmptyBasket";
import BasketProducts from "./BasketProducts";

export default function BasketBody({ isBasketEmpty, menuProducts }) {
  return (
    <>
      {isBasketEmpty ? (
        <EmptyBasket isLoading={menuProducts === undefined} />
      ) : (
        <BasketProducts />
      )}
    </>
  );
}
