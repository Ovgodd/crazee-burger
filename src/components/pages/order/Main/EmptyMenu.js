import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Button from "../../../reusable-ui/Buttons/Button";

export default function EmptyMenu({ onClick }) {
  return (
    <EmptyMenuStyled>
      <span className="question">le menu est vide ?</span>
      <span className="generate-message">
        cliquez-ci dessous pour le réinitialiser
      </span>
      <Button
        className="generate-button"
        label="Générer de nouveaux produits"
        onClick={onClick}
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
    font-size: ${theme.fonts.size.XS};
    width: 224px;
    height: 50px;
    white-space: nowrap;
  }
`;
