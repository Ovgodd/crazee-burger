import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Header({ amountToPay, label }) {
  return (
    <HeaderStyled>
      <span>{label}</span>
      <span>{amountToPay}</span>
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
`;
