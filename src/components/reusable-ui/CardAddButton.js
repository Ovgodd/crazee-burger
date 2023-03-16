import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function CardAddButton({ label, className, onClick }) {
  return (
    <CardAddButtonStyled onClick={onClick} className={className}>
      {label}
    </CardAddButtonStyled>
  );
}
const CardAddButtonStyled = styled.button`
  border-radius: ${theme.borderRadius.round};
  border: 1px solid;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: ${theme.fonts.size.XS};
  font-weight: ${theme.fonts.weights.bold};
  color: ${theme.colors.white};
  width: 95px;
  height: 38px;

  &:hover {
    background-color: ${theme.colors.white};
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
    border: 1px solid;
    transition: 0.3s;
    cursor: pointer;
  }
  &:active {
    background-color: ${theme.colors.primary};
    border-color: ${theme.colors.white};
    color: ${theme.colors.white};
    transition: 0.3s;

    cursor: pointer;
  }
`;
