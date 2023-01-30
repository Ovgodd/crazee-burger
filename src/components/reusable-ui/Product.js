import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Product() {
  return (
    <ProductStyled>
      <img src="../../images/burger3.png" alt="burger" />
      <div>
        <h1 className="overflow">meal name sal</h1>
        <div className="interact-container">
          <div className="price">
            <span>price</span>
          </div>
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
  h1 {
    white-space: nowrap;
    overflow: hidden;
    border: 1px solid yellow;
    width: 200px;
    text-overflow: ellipsis;
  }
  .interact-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
