import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import BurgerLogo from "../../reusable-ui/BurgerLogo";

export default function OrderContainer() {
  const { username } = useParams();

  return (
    <OrderContainerStyled>
      <div className="navbar">
        <div className="text">
          <h1>Bonjour {username}</h1>
          <br />
          <Link to="/">
            <button>Déconnexion</button>
          </Link>
        </div>
        <BurgerLogo className={"burgerlogo"} />
      </div>
    </OrderContainerStyled>
  );
}
const OrderContainerStyled = styled.div`
  .navbar {
    background: white;
    border-radius: 15px 15px 0px 0px;
    margin-left: 20px;
    margin-right: 20px;
    /* max-height: 100px; */
  }
  .text {
    text-align: right;
    margin-right: 20px;
  }
  .burgerlogo {
    color: red;
  }
`;
