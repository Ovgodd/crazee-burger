import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function EmptyMenu({ onClick }) {
  return (
    <EmptyMenuStyled>
      <div className="empty-menu">
        <span className="question">le menu est vide ? </span>
        <span className="action">cliquez ci dessous pour le réinitialiser</span>
        <button className="generate" onClick={onClick}>
          Générer de nouveaux produits
        </button>
      </div>
    </EmptyMenuStyled>
  );
}
const EmptyMenuStyled = styled.div`
  box-shadow: ${theme.shadows.strong};
  background: ${theme.colors.background_white};
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Amatic SC";
  .empty-menu {
    background: orange;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: orange;
    .question {
      background: blue;
    }
    .action {
      background: yellow;
    }
    .generate {
      background: pink;
    }
  }
`;
