import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";

import MenuStyled from "../../pages/order/navbar/Menu";
export default function Main() {
  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <MenuStyled />
    </MainStyled>
  );
}
const MainStyled = styled.div`
  height: 90vh;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  overflow-y: scroll;

  /* display: grid;
  grid-template-columns: 25% 1fr;
  .basket {
    background: pink;
  } */
`;
