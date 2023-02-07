import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function TabButton(className) {
  return <TabButtonStyled className={className}></TabButtonStyled>;
}
const TabButtonStyled = styled.div`
  background: ${theme.colors.background_white};
  z-index: 2;
  border: none;

  .tab1 {
    grid-column-start: 2;
    grid-column-end: 3;
  }
  .tab2 {
    grid-column-start: 3;
    grid-column-end: 6;
  }
  .tab3 {
    grid-column-start: 6;
    grid-column-end: 9;
  }
`;
