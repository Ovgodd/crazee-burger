import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

export default function Basket() {
  return (
    <BasketStyled>
      <Header label="Total" price="0,00 €" />
      <Body label="votre commande est vide." />
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
