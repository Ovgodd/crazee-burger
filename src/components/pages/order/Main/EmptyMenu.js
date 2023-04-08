import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Button from "../../../reusable-ui/Buttons/Button";
import OrderContext from "../../../../context/OrderContext";

export default function EmptyMenu({ onClick }) {
  const { isAdmin } = useContext(OrderContext);

  return (
    <EmptyMenuStyled>
      <span className="question">
        {isAdmin ? "le menu est vide ?" : "Victime de notre succès ! :D"}
      </span>
      <span className="generate-message">
        {isAdmin
          ? "Cliquez ci-dessous pour le réinitialiser"
          : "De nouvelles recettes sont en cours de préparation."}
      </span>
      {!isAdmin ? (
        <span className="see-you">À très vite</span>
      ) : (
        <Button
          className="generate-button"
          label="Générer de nouveaux produits"
          onClick={onClick}
        />
      )}
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
    margin-top: 29px;
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

  .see-you {
    font-weight: 400;
    font-size: 36px;
  }
`;
