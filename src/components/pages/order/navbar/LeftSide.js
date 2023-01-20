import React from "react";
import styled from "styled-components";
import BurgerLogo from "../../../reusable-ui/BurgerLogo";

export default function LeftSide() {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <LeftSideStyled onClick={refreshPage}>
      <BurgerLogo className={"logo-order-page"} />
    </LeftSideStyled>
  );
}
const LeftSideStyled = styled.div`
  .logo-order-page {
    cursor: pointer;
    transform: scale(0.4);
    transform-origin: center left;
  }
`;
