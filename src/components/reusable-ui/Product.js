import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Product() {
  return (
    <ProductStyled>
      <img src="../../images/burger3.png" alt="burger" />
      <div className="interact-container">
        <h1>Vegan Burger dqdqdzqd</h1>
        <div className="interacter">
          <div className="price">
            <span>9000</span>
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
  background: ${theme.colors.white};

  img {
    width: 200px;
    height: 145px;
    object-fit: contain;
    object-position: center;
  }
  h1 {
    white-space: nowrap;
    overflow: hidden;
    width: 200px;
    margin: 15px;
    text-overflow: ellipsis;
    font-family: "Amatic SC", cursive;
  }
  .interact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0px 5px 5px;
    width: 200px;
    height: 110px;
    .interacter {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 200px;
    }
  }
  span {
    color: ${theme.colors.primary};
    font-weight: ${theme.weights.light};
  }
  button {
    border-radius: ${theme.borderRadius.round};
    border: none;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.fonts.XS};
    font-weight: ${theme.weights.light};
    color: ${theme.colors.white};
    width: 95px;
    height: 38px;
    &:active {
      background-color: ${theme.colors.white};
      border-color: ${theme.colors.primary};
      color: ${theme.colors.primary};
      border: 1px solid;
    }
  }
`;
