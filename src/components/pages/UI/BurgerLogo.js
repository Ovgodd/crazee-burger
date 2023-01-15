import React from "react";
import styled from "styled-components";
import Logo from "../../../images/F03 logo-orange.png";
import { theme } from "../../../theme";

export default function BurgerLogo() {
  return (
    <BurgerLogoStyled>
      <div className="logo-container">
        <h1 className="title">CRAZEE</h1>
        <img className="logo" src={Logo} alt="Logo" />
        <h1 className="title">BURGER</h1>
      </div>
    </BurgerLogoStyled>
  );
}
const BurgerLogoStyled = styled.div`
  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 130px;
      color: ${theme.colors.primary};
    }
    .logo {
      margin-left: ${theme.spacing.sm};
      margin-right: ${theme.spacing.sm};
      height: 25%;
      width: 25%;
    }
  }
`;
