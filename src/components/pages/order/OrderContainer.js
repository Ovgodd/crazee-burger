import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export default function OrderContainer() {
  const { username } = useParams();

  return (
    <OrderContainerStyled>
      <h1>Bonjour {username}</h1>
      <br />
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </OrderContainerStyled>
  );
}
const OrderContainerStyled = styled.div``;
