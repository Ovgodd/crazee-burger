import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

export default function NavBar({ username }) {
  return (
    <NavBarStyled>
      <LeftSide />
      <RightSide username={username} />
    </NavBarStyled>
  );
}
const NavBarStyled = styled.div`
  display: flex;
  flex-direction: row;
  background: ${theme.colors.white};
  justify-content: space-between;
  align-items: center;
  border-radius: 15px 15px 0px 0px;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  max-height: 94px;
  padding-left: 20px;
  padding-right: 70px;
  border-bottom: 1px solid ${theme.colors.greyLight};
`;
