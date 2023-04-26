import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function BasketCard({ imageSource, title, price, quantity }) {
  return (
    <BasketCardStyled>
      <img className="product-image" src={imageSource} alt="product" />
      <div className="description">
        <span className="title">{title}</span>
        <span className="price">{price} €</span>
      </div>
      <span className="quantity">{quantity}</span>
      {/* <button className="delete">X</button> */}
    </BasketCardStyled>
  );
}
const BasketCardStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  box-sizing: border-box;
  width: 90%;
  height: 85px;
  padding: 8px 16px;
  margin: 20px 0;
  border-radius: ${theme.borderRadius.extraRound};
  overflow: hidden;
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.medium};
  position: relative;

  img {
    width: 85px;
    height: 60px;
    object-fit: contain;
  }
  .description {
    margin-left: 21px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    .title {
      font-family: "Amatic SC";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      color: #17161a;
    }
    .price {
      font-family: "Open Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 20px;
      color: #ffa01b;
    }
  }
  .quantity {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    margin-left: 4px;
    display: flex;
    justify-content: center;
    color: #ffa01b;
  }
  .delete {
    position: absolute;
    width: 76px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    background: #e25549;
  }
`;
