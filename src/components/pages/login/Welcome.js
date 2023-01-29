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
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.colors.white};
  font-family: "Amatic SC", cursive;

  h1 {
    font-size: ${theme.fonts.P5};
    margin-top: ${theme.spacing.xxs};
  }

  hr {
    border: 1.5px solid ${theme.colors.loginLine};
    width: 440px;
  }

  h2 {
    font-size: ${theme.fonts.P4};
  }
`;
