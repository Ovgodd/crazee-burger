import React, { useContext } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { formatPrice } from "../../../../utils/maths";
import BasketProducts from "./BasketProducts";
import OrderContext from "../../../../context/OrderContext";
import EmptyBasket from "./EmptyBasket";

export default function Basket() {
  const { basket, isAdmin, handleDeleteToBasket } = useContext(OrderContext);

  const totalToPay = basket.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const isBasketEmpty = basket.length === 0;
  return (
    <BasketStyled>
      <Header label="Total" amountToPay={formatPrice(totalToPay)} />
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
