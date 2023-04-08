import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Button from "../../../reusable-ui/Buttons/Button";
import OrderContext from "../../../../context/OrderContext";

export default function EmptyMenu({ onClick, label }) {
  const { isAdmin } = useContext(OrderContext);

  return (
    <EmptyMenuStyled>
      <span className="question">{label.question}</span>
      <span className="generate-message">{label.message}</span>
      {isAdmin ? (
        <Button
          className="generate-button"
          label="Générer de nouveaux produits"
          onClick={onClick}
        />
      ) : (
        <span className="see-you">{label.bottomMessage}</span>
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
