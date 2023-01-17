import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import { IoChevronForward } from "react-icons/io5";

export default function PrimaryButton() {
  return (
    <PrimaryButtonStyled>
      <button>
        <span>Accédez à mon espace</span>
        <IoChevronForward className="icon" />
      </button>
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.div`
  button {
    margin: ${theme.spacing.sm};
    border-radius: ${theme.borderRadius.round};
    border: none;
    background-color: ${theme.colors.primary_burger};
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P0};
    font-weight: ${theme.weights.light};
    color: ${theme.colors.white};
    letter-spacing: 1px;
    padding: 18px 24px;
    width: 440px;

    &:active {
      background-color: ${theme.colors.white};
      border-color: ${theme.colors.primary_burger};
      color: ${theme.colors.primary_burger};
      border: 1px solid;
    }

    .icon {
      transform: translateY(20%);
    }
  }
`;
