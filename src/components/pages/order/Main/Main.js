import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import AdminPanel from "./AdminPanel";
import MenuStyled from "./Menu";
export default function Main() {
  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <MenuStyled />
      <AdminPanel />
    </MainStyled>
  );
}
const MainStyled = styled.div`
  height: 100%;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  overflow-y: scroll;
  /* display: grid;
  grid-template-columns: 25% 1fr;
  .basket {
    background: pink;
  } */
`;
