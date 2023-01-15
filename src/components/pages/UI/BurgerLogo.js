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
    font-size: ${theme.fonts.P6};
    h1 {
      font-size: ${theme.fonts.P6};
      color: ${theme.colors.primary};
    }
    .logo {
      height: 15%;
      width: 15%;
    }
  }
`;
