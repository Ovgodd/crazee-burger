import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import OrderContext from "../../../../context/OrderContext";
import { formatPrice } from "../../../../utils/maths";
import { totalSumToPay } from "./helper";

export default function Header({ label }) {
  const { basket, menuProducts } = useContext(OrderContext);

  const totalToPay = totalSumToPay(basket, menuProducts);

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
