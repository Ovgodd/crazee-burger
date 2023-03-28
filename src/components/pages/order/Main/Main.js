import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext";
import { theme } from "../../../../theme";
import Admin from "../Admin/Admin";
import Menu from "./Menu";

export default function Main() {
  const { isAdmin } = useContext(OrderContext);

  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <div className="menu-and-admin">
        <Menu />
        {isAdmin && <Admin />}
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  height: 85vh;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  position: relative;
  display: grid;
  /* grid-template-columns: 25% 1fr;
  .basket {
    background: pink;
  } */
  .menu-and-admin {
    position: relative;
    display: grid;
    overflow-y: hidden;
  }
`;
