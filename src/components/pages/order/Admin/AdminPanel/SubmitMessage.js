import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function SubmitMessage() {
  return (
    <SubmitMessageStyled>
      <AiOutlineCheckCircle className="icon" />
      <span>Ajouté avec succès !</span>
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
    width: 20px;
    height: 20px;
  }
  span {
    color: ${theme.colors.success};
    font-size: ${theme.fonts.size.SM};
    font-weight: ${theme.fonts.weights.regular};
    margin-left: 3px;
  }
`;
