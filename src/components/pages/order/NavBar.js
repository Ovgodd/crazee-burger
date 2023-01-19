import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import BurgerLogo from "../../reusable-ui/BurgerLogo";

export default function NavBar() {
  const { username } = useParams();
  return (
    <NavBarStyled>
      <BurgerLogo className="logo" />
      <div className="right-side">
        <div className="welcome-elements">
          <h1 className="welcome-text">Hey, {username}</h1>
          <a className="link" href="/">
            Se déconnecter
            <BsPersonCircle className="icon" />
          </a>
        </div>
      </div>
    </NavBarStyled>
  );
}
const NavBarStyled = styled.div`
  display: flex;
  flex-direction: row;
  background: white;
  justify-content: space-between;
  border-radius: 15px 15px 0px 0px;
  max-height: 94px;
  .logo {
    transform: scale(0.4);
    transform-origin: center left;
    margin-left: 30px;
  }
  .right-side {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: space-around;
    align-content: space-around;
    margin-right: 70px;
    background-color: purple;
    .welcome-elements {
      background: green;
    }
    .welcome-text {
      font-family: "Open Sans", sans-serif;
      font-size: ${theme.fonts.P0};
      right: 0;
    }
    .link {
      color: red;
      font-size: ${theme.fonts.P0};
      margin-bottom: 50px;
    }

    .icon {
      height: 36px;
      width: 36px;
      color: ${theme.colors.greyLight};
      margin-bottom: 30px;
    }
  }
`;
