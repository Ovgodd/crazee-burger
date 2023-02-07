import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Tabs() {
  return (
    <TabsStyled>
      <button className="tab1">tab1</button>
      <button className="tab2">Ajouter un produit</button>
      <button className="tab3">Modifier un produit</button>
    </TabsStyled>
  );
}
const TabsStyled = styled.div`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(16, 1fr);
  height: 44px;

  .tab1 {
    background: ${theme.colors.background_white};
    z-index: 2;
    grid-column-start: 2;
    grid-column-end: 3;
    border: none;
  }
  .tab2 {
    background: ${theme.colors.background_white};
    z-index: 2;
    grid-column-start: 3;
    grid-column-end: 6;
    border: none;
  }
  .tab3 {
    background: ${theme.colors.background_white};
    z-index: 2;
    grid-column-start: 6;
    grid-column-end: 9;
    border: none;
  }
`;
