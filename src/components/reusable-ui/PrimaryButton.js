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
  margin-top: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.round};
  border: none;
  background-color: ${theme.colors.primary_burger};
  color: ${theme.colors.white};
  font-family: "Open Sans", sans-serif;
  font-weight: ${theme.weights.semiBold};
  font-size: ${theme.spacing.md};
  letter-spacing: 1px;
  height: ${theme.spacing.xl};
  width: 405px;

  &:active {
    background-color: ${theme.colors.white};
    border-color: ${theme.colors.primary_burger};
    color: ${theme.colors.primary_burger};
    border: 1px solid;
  }
`;
