import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function TabButton({ className, text, Icon, onClick }) {
  return (
    <TabButtonStyled className={className} onClick={onClick}>
      {Icon && Icon}
      {text}
    </TabButtonStyled>
  );
}
const TabButtonStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  z-index: 2;
  border-width: 1px 1px 2px 1px;
  border-radius: 5px 5px 0px 0px;
  border-style: solid;
  border-color: ${theme.colors.greyLight};
  font-weight: ${theme.weights.regular};
  color: ${theme.colors.greySemiDark};
  background: ${theme.colors.white};

  cursor: pointer;
  ::selection {
    color: none;
    background: none;
  }
`;
