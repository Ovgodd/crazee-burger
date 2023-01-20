import React from "react";
import styled from "styled-components";
import Logo from "../../images/F03 logo-orange.png";
import { theme } from "../../theme";

export default function BurgerLogo({ className }) {
  return (
    <BurgerLogoStyled className={className}>
      <h1>CRAZEE</h1>
      <img src={Logo} alt="Logo" />
      <h1>BURGER</h1>
    </BurgerLogoStyled>
  );
}

const BurgerLogoStyled = styled.div`
  display: flex;

  align-items: center;
  h1 {
    font-size: ${theme.fonts.p9};
    color: ${theme.colors.primary};
    font-family: "Amatic SC", cursive;
    ::selection {
      color: none;
      background: none;
    }
  }

  img {
    ::selection {
      color: none;
      background: none;
    }
    object-fit: cover;
    object-position: center;
    margin-left: ${theme.spacing.sm};
    margin-right: ${theme.spacing.sm};
    height: 120px;
    width: 200px;
  }
`;
