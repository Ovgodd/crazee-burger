import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function Welcome() {
  return (
    <WelcomeStyled>
      <div className="welcome-container">
        <h2>Bienvenue chez nous !</h2>
        <h3>Connectez-vous</h3>
      </div>
    </WelcomeStyled>
  );
}
const WelcomeStyled = styled.div`
  .welcome-container {
    margin: -3em;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${theme.colors.white};

    h2 {
      font-size: ${theme.fonts.P4};
      align-items: center;
      display: flex;
      flex-direction: column;
      border-bottom: 3px solid ${theme.colors.red};
      padding-bottom: 30px;
      width: 140%;
    }

    h3 {
      margin-top: ${theme.spacing.xxs};
      font-size: ${theme.fonts.P3};
    }
  }
`;
