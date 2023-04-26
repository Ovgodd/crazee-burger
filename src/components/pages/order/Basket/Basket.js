import React, { useContext } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { formatPrice } from "../../../../utils/maths";
import BasketProducts from "./BasketProducts";
import OrderContext from "../../../../context/OrderContext";

export default function Basket() {
  const { basket } = useContext(OrderContext);
  return (
    <BasketStyled>
      <Header label="Total" amountToPay={formatPrice(0)} />
      <BasketProducts basket={basket} label="votre commande est vide." />
      <Footer label="Codé avec ❤️ et React.JS" />
    </BasketStyled>
  );
}
const BasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 0px 0px 0px 15px;
`;
