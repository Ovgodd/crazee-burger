import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Product() {
  return (
    <ProductStyled>
      <img src="../../images/burger3.png" alt="burger" />
      <div>
        <h1 className="overflow">meal name overflow point</h1>
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
    width: 200px;
    height: 145px;
  }
  h1 {
    white-space: nowrap;
    overflow: hidden;
    width: 200px;
    text-overflow: ellipsis;
    font-family: "Amatic SC", cursive;
  }
  .interact-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  span {
    color: ${theme.colors.primary};
  }
  button {
    background: red;
    border-radius: ${theme.borderRadius.round};
    border: none;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.fonts.P0};
    font-weight: ${theme.weights.light};
    color: ${theme.colors.white};
    width: 80px;
    height: 40px;
    &:active {
      background-color: ${theme.colors.white};
      border-color: ${theme.colors.primary};
      color: ${theme.colors.primary};
      border: 1px solid;
    }
  }
`;
