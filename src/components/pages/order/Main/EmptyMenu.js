import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import SecondaryButton from "../../../reusable-ui/SecondaryButton";

export default function EmptyMenu({ onClick }) {
  return (
    <EmptyMenuStyled>
      <span className="question">le menu est vide ?</span>
      <span className="generate-message">
        cliquez-ci dessous pour le réinitialiser
      </span>
      <SecondaryButton
        className="generate-button"
        onClick={onClick}
        label="Générer de nouveaux produits"
      />
    </EmptyMenuStyled>
  );
}
const EmptyMenuStyled = styled.div`
  box-shadow: ${theme.shadows.strong};
  background: ${theme.colors.background_white};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Amatic SC";
  font-style: normal;
  color: ${theme.colors.greyBlue};

  .question {
    font-weight: 700;
    font-size: 36px;
  }

  .generate-message {
    margin-top: 21px;
    margin-bottom: 31px;
    font-weight: 400;
    font-size: 36px;
  }

  .generate-button {
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    color: white;
    background: #${theme.colors.primary};
    border: 1px solid #${theme.colors.primary};
    border-radius: 5px;
    width: 224px;
    height: 50px;

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
  }
`;
