import React from "react";
import styled from "styled-components";
import BurgerLogo from "../../../reusable-ui/BurgerLogo";
import RightSide from "./RightSide";

export default function NavBar() {
  const refreshPage = () => {
    console.log("refreshing");
    window.location.reload();
  };
  return (
    <NavBarStyled>
      <div className="logo" onClick={refreshPage}>
        <BurgerLogo />
      </div>
      <RightSide />
    </NavBarStyled>
  );
}
const NavBarStyled = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px 15px 0px 0px;
  max-height: 94px;
  .logo {
    transform: scale(0.4);
    transform-origin: center left;
    margin-left: 30px;
    cursor: pointer;
  }
`;
