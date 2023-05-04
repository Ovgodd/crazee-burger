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
  box-shadow: ${theme.shadows.basket};
  background: ${theme.colors.background_white};
  .empty-message {
    font-family: ${theme.fonts.family.stylish};
    font-weight: ${theme.fonts.weights.regular};
    font-size: ${theme.fonts.size.P4};
    line-height: 72px;
    color: ${theme.colors.greyBlue};
  }
`;
