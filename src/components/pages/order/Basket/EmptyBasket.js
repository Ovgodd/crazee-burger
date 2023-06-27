import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import { BASKET_MESSAGE } from "../../../enums/product";

export default function EmptyBasket({ isLoading }) {
  return (
    <EmptyBasketStyled>
      <span className="empty-message">
        {isLoading ? BASKET_MESSAGE.LOADING : BASKET_MESSAGE.EMPTY}
      </span>
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
