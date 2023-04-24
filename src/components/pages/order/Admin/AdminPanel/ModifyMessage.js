import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function ModifyMessage({ label, underline }) {
  return (
    <ModifyMessageStyled>
      {label}
      <u>{underline}</u>
    </ModifyMessageStyled>
  );
}

const ModifyMessageStyled = styled.div`
  color: ${theme.colors.greySemiDark};
  position: relative;
  left: 240px;
  bottom: 0px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: ${theme.fonts.weights.regular};
  font-size: ${theme.fonts.size.SM};
  line-height: 20px;
  display: flex;
  align-items: center;
  color: ${theme.colors.primary};
`;
