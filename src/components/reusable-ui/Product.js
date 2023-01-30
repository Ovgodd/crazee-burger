import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Product() {
  return (
    <ProductStyled>
      <img src="../../images/burger3.png" alt="burger" />
      <div>
        <h1>meal name</h1>
        <div className="interact-container">
          <span>price</span>
          <button>Ajouter</button>
        </div>
      </div>
    </ProductStyled>
  );
}
const ProductStyled = styled.div`
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  width: 240px;
  height: 330px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  img {
    background: red;
    width: 200px;
    height: 145px;
  }
  .interact-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
