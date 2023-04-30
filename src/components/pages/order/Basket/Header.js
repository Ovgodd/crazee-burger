import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import { formatPrice } from "../../../../utils/maths";

export default function Header({ label, totalToPay }) {
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
