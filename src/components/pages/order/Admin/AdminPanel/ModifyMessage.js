import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function ModifyMessage() {
  return (
    <ModifyMessageStyled>
      Cliquer sur un produit du menu pour le modifier&nbsp;
      <u>en temps réel</u>
    </ModifyMessageStyled>
  );
}

const ModifyMessageStyled = styled.div`
  color: ${theme.colors.greySemiDark};
  position: absolute;
  bottom: 10px;
  left: 235px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: ${theme.fonts.weights.regular};
  font-size: ${theme.fonts.size.SM};
  line-height: 20px;
  display: flex;
  align-items: center;
  color: ${theme.colors.primary};
`;
