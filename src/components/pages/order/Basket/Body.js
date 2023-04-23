import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Body({ label }) {
  return (
    <BodyStyled>
      <span>{label}</span>
    </BodyStyled>
  );
}
const BodyStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.2);
  background: ${theme.colors.background_white};

  font-family: ${theme.fonts.family.stylish};
  font-style: normal;
  font-weight: ${theme.fonts.weights.regular};
  font-size: ${theme.fonts.size.P4};
  line-height: 72px;
  color: ${theme.colors.greyBlue};
`;
