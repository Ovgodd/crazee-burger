import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function PrimaryButton({ label, Icon }) {
  return (
    <PrimaryButtonStyled>
      <button>
        {label}
        {Icon && Icon}
      </button>
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.div`
  button {
    margin: ${theme.spacing.sm};
    border-radius: ${theme.borderRadius.round};
    border: none;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P0};
    font-weight: ${theme.weights.light};
    color: ${theme.colors.white};
    letter-spacing: 1px;
    padding: 18px 24px;
    width: 440px;

    &:active {
      background-color: ${theme.colors.white};
      border-color: ${theme.colors.primary};
      color: ${theme.colors.primary};
      border: 1px solid;
    }
  }
`;
