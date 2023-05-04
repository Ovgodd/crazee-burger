import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function SubmitMessage({ label, Icon }) {
  return (
    <SubmitMessageStyled>
      {Icon && Icon}
      <span className="success">{label}</span>
    </SubmitMessageStyled>
  );
}
const SubmitMessageStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: ${theme.colors.success};
  position: absolute;
  bottom: 0px;
  width: 275px;
  height: 34px;
  right: 80px;

  .icon {
    display: flex;
    align-items: center;
    width: 20px;
    height: 20px;
  }
  .success {
    color: ${theme.colors.success};
    font-size: ${theme.fonts.size.SM};
    font-weight: ${theme.fonts.weights.regular};
    margin-left: 3px;
  }
`;
