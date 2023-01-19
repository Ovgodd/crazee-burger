import React from "react";
import styled from "styled-components";
import BurgerLogo from "../../../reusable-ui/BurgerLogo";

export default function LeftSide() {
  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <LeftSideStyled className="logo" onClick={refreshPage}>
      <BurgerLogo />
    </LeftSideStyled>
  );
}
const LeftSideStyled = styled.div`
  transform: scale(0.4);
  transform-origin: center left;
  margin-left: 30px;
  cursor: pointer;
`;
