import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import OrderContext from "../../../../context/OrderContext";
import { findInArray } from "../../../../utils/array";
import { formatPrice } from "../../../../utils/maths";

export default function Header({ label }) {
  const { basket } = useContext(OrderContext);

  const totalToPay = basket.reduce((total, basketProduct) => {
    const menuProduct = findInArray(basketProduct.id, basket);
    if (isNaN(menuProduct.price)) return total;
    total += menuProduct.price * basketProduct.quantity;
    return total;
  }, 0);

  return (
    <HeaderStyled>
      <span>{label}</span>
      <span className="total">{formatPrice(totalToPay)}</span>
    </HeaderStyled>
  );
}
const HeaderStyled = styled.div`
  background: ${theme.colors.background_dark};
  padding: 0px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;

  font-family: ${theme.fonts.family.stylish};
  font-style: normal;
  font-weight: ${theme.fonts.weights.regular};
  font-size: ${theme.fonts.size.P4};
  line-height: 45px;
  letter-spacing: 2px;
  color: ${theme.colors.primary};
  .total {
    font-weight: ${theme.fonts.weights.bold};
  }
`;
