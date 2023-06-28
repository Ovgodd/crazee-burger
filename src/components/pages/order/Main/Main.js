import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext";
import { theme } from "../../../../theme";
import Admin from "../Admin/Admin";
import Menu from "./Menu";
import Basket from "../Basket/Basket";
import { CSSTransition } from "react-transition-group";

export default function Main() {
  const { isAdmin } = useContext(OrderContext);

  return (
    <MainStyled>
      <Basket />
      <div className="menu-and-admin">
        <Menu />
        <CSSTransition
          in={isAdmin}
          timeout={1000}
          classNames="admin-panel"
          unmountOnExit
        >
          <Admin />
        </CSSTransition>
      </div>
    </MainStyled>
  );
}

const MainStyled = styled.div`
  height: 85vh;
  /* border-bottom-left-radius: ${theme.borderRadius.extraRound}; */
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  position: relative;
  display: grid;
  grid-template-columns: 25% 1fr;

  .menu-and-admin {
    position: relative;
    display: grid;
    overflow-y: hidden;
  }
  .admin-panel-enter {
    transform: translateY(251px);
    opacity: 0%;
  }
  .admin-panel-enter-active {
    opacity: 100%;
    transition: 1s;
    transform: translateY(0px);
  }
  .admin-panel-exit {
    opacity: 100%;

    transform: translateY(0px);
  }
  .admin-panel-exit-active {
    opacity: 0%;
    transition: 1s;
    transform: translateY(251px);
  }
`;
