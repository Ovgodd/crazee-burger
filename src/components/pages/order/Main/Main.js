import React, { useContext } from "react";
import styled from "styled-components";
import AdminContext from "../../../../context/AdminContext";
import { theme } from "../../../../theme";
import AdminPanel from "./AdminPanel";
import MenuStyled from "./Menu";
export default function Main() {
  const { isAdmin, setIsAdmin } = useContext(AdminContext);

  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <MenuStyled />
      <div className={isAdmin ? "open-panel" : "close-panel"}>
        <AdminPanel />
      </div>
    </MainStyled>
  );
}
const MainStyled = styled.div`
  height: 100vh;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  overflow-y: scroll;
  /* display: grid;
  grid-template-columns: 25% 1fr;
  .basket {
    background: pink;
  } */
  .open-panel {
    display: block;
  }
  .close-panel {
    display: none;
  }
`;
