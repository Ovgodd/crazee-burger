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
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.family.stylish};
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
    object-fit: contain;
    object-position: center;
    margin-left: ${theme.spacing.xxs};
    margin-right: ${theme.spacing.xxs};
    height: 60px;
    width: 80px;
  }
`;
