import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import { IoChevronForward } from "react-icons/io5";

export default function PrimaryButton() {
  return (
    <PrimaryButtonStyled>
      <button className="btn">
        <span>Accédez à mon espace</span>
        <IoChevronForward className="icon" />
      </button>
    </PrimaryButtonStyled>
  );
}

const PrimaryButtonStyled = styled.div`
  .btn {
    margin: ${theme.spacing.sm};
    border-radius: ${theme.borderRadius.round};
    border: none;
    background-color: ${theme.colors.primary_burger};
    color: ${theme.colors.white};
    font-family: "Open Sans", sans-serif;
    font-weight: ${theme.weights.light};
    font-size: ${theme.fonts.P0};
    letter-spacing: 1px;
    padding: 18px 24px;
    width: 440px;
    text-align: center;
    justify-items: center;
    justify-content: center;

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
