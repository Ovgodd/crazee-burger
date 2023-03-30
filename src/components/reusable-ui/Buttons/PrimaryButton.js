import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function PrimaryButton({ label, Icon }) {
  return (
    <PrimaryButtonStyled>
      {label}
      {Icon && Icon}
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.button`
  width: 100%;
  padding: 18px 24px;
  font-size: 15px;
  align-self: center;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.round};
  border: none;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: ${theme.fonts.size.SM};
  font-weight: ${theme.fonts.weights.bold};
  line-height: 1;
  color: ${theme.colors.white};
  border: 1px solid ${theme.colors.primary};
  cursor: pointer;
  &:active {
    background-color: ${theme.colors.white};
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
    border: 1px solid;
  }
  &:hover {
    background-color: ${theme.colors.white};
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
    border: 1px solid;
    transition: 0.3s;
    cursor: pointer;
  }
`;
