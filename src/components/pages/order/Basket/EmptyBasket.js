import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function EmptyBasket() {
  return (
    <EmptyBasketStyled>
      <span className="empty-message">Votre commande est vide</span>
    </EmptyBasketStyled>
  );
}
const EmptyBasketStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.2);
  background: ${theme.colors.background_white};
  .empty-message {
    font-family: "Amatic SC";
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 72px;
    color: ${theme.colors.greyBlue};
  }
`;
