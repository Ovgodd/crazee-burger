import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function Welcome() {
  return (
    <WelcomeStyled>
      <h2>Bienvenue chez nous !</h2>
      <h3>Connectez-vous</h3>
    </WelcomeStyled>
  );
}
const WelcomeStyled = styled.div`
  margin: -3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.colors.white};

  h2 {
    font-size: ${theme.fonts.P6};
    align-items: center;
    display: flex;
    flex-direction: column;
    border-bottom: 5px solid ${theme.colors.orange_line};
    padding-bottom: ${theme.spacing.xl};
    width: 130%;
    margin-top: ${theme.spacing.lg};
  }

  h3 {
    margin-top: ${theme.spacing.xxs};
    font-size: ${theme.fonts.P5};
  }
`;
