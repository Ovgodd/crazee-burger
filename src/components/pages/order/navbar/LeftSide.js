import React from "react";
import styled from "styled-components";
import { refreshPage } from "../../../../utils/Window";
import BurgerLogo from "../../../reusable-ui/BurgerLogo";

export default function LeftSide() {
  return (
    <LeftSideStyled onClick={refreshPage}>
      <BurgerLogo className={"logo-order-page"} />
    </LeftSideStyled>
  );
}
const LeftSideStyled = styled.div`
  .logo-order-page {
    cursor: pointer;
    width: 80%;
    height: 80%;
    transform: scale(0.5);
    transform-origin: center left;
    object-fit: cover;
  }
`;
