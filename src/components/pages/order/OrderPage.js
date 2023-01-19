import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import BurgerLogo from "../../reusable-ui/BurgerLogo";

export default function OrderPage() {
  const { username } = useParams();
  return (
    <OrderPageStyled>
      <div className="container">
        <div className="navbar">
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
        </div>
      </div>
    </OrderPageStyled>
  );
}
const OrderPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${theme.colors.primary};
  .container {
    background: black;
    height: 95vh;
    width: 1400px;
    .navbar {
      display: flex;
      flex-direction: row;
      background: white;
      justify-content: space-between;
      border-radius: 15px 15px 0px 0px;
      margin-left: 20px;
      margin-right: 20px;
      max-height: 94px;
      .logo {
        background: green;
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
    }
  }
`;
