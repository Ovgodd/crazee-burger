import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function Welcome() {
  return (
    <WelcomeStyled>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
    </WelcomeStyled>
  );
}
const WelcomeStyled = styled.div`
  margin: -2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.colors.white};
  font-family: "Amatic SC", cursive;

  h1 {
    font-size: ${theme.fonts.P5};
    margin-top: ${theme.spacing.md};
  }
  hr {
    border: 1.5px solid #f56a2c;
    width: 400px;
  }
  h2 {
    margin-top: ${theme.spacing.md};
    font-size: ${theme.fonts.P4};
  }
`;
