import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton() {
  return (
    <PrimaryButtonStyled className="btn">
      Accédez à mon espace &#62;
    </PrimaryButtonStyled>
  );
}
const PrimaryButtonStyled = styled.button`
  margin: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.round};
  border: none;
  background-color: ${theme.colors.primary_burger};
  color: ${theme.colors.white};
  font-family: "Open Sans", sans-serif;
  font-weight: ${theme.weights.semiBold};
  font-size: ${theme.fonts.P0};
  letter-spacing: 1px;
  padding: 18px 24px;
  width: 400px;

  &:active {
    background-color: ${theme.colors.white};
    border-color: ${theme.colors.primary_burger};
    color: ${theme.colors.primary_burger};
    border: 1px solid;
  }
`;
