import React, { useContext } from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Tab({ className, text, Icon, onClick }) {
  return (
    <TabStyled className={className} onClick={onClick}>
      {Icon && Icon}
      {text}
    </TabStyled>
  );
}
const TabStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  z-index: 2;
  border-width: 1px 1px 0px 1px;
  border-radius: 5px 5px 0px 0px;
  border-bottom: 2px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};
  font-weight: ${theme.fonts.weights.regular};
  color: ${theme.colors.greySemiDark};
  background: ${theme.colors.white};
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    border-bottom-color: rgba(0, 0, 0, 0);
  }
`;
