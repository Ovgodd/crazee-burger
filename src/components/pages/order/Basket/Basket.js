import React, { useContext } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import BasketProducts from "./BasketProducts";
import OrderContext from "../../../../context/OrderContext";
import EmptyBasket from "./EmptyBasket";
import { isEmpty } from "../../../../utils/array";
import { totalSumToPay } from "./helper";

export default function Basket() {
  const { basket, menuProducts, isAdmin, handleDeleteToBasket } =
    useContext(OrderContext);

  const totalToPay = totalSumToPay(basket, menuProducts);
  const isBasketEmpty = isEmpty(basket);

  return (
    <BasketStyled>
      <Header totalToPay={totalToPay} label="Total" />
      {isBasketEmpty ? (
        <EmptyBasket />
      ) : (
        <BasketProducts
          basket={basket}
          isAdmin={isAdmin}
          handleDeleteToBasket={handleDeleteToBasket}
        />
      )}
      <Footer label="Codé avec ❤️ et React.JS" />
    </BasketStyled>
  );
}
const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  border-radius: 0px 0px 0px 15px;
`;
