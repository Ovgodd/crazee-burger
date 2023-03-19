import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({ label, Icon }) {
  return (
    <PrimaryButtonStyled>
      {label}
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  margin: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.round};
  border: none;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: ${theme.fonts.size.SM};
  font-weight: ${theme.fonts.weights.bold};
  line-height: 15px;
  color: ${theme.colors.white};
  padding: 18px 24px;
  width: 440px;
  font-size: 15px;
  cursor: pointer;
  &:active {
    background-color: ${theme.colors.white};
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
    border: 1px solid;
  }

  .chevron-icon {
    transform: translateY(20%);
  }
`;
