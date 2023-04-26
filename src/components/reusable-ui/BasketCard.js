import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";
import { MdDeleteForever } from "react-icons/md";

export default function BasketCard({
  imageSource,
  title,
  price,
  quantity,
  isAdmin,
  onDelete,
}) {
  return (
    <BasketCardStyled isAdmin={isAdmin}>
      {isAdmin && (
        <button onClick={onDelete} className="delete">
          <MdDeleteForever className="icon" />
        </button>
      )}
      <img className="product-image" src={imageSource} alt="product" />
      <div className="description">
        <span className="title">{title}</span>
        <span className="price">{price}</span>
      </div>
      <span className="quantity">x {quantity}</span>
    </BasketCardStyled>
  );
}
const BasketCardStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  box-sizing: border-box;
  width: 90%;
  min-height: 86px;
  padding: 8px 16px;
  margin-top: 20px;
  border-radius: ${theme.borderRadius.round};
  background-color: ${theme.colors.background_white};
  box-shadow: ${theme.shadows.medium};
  position: relative;
  .icon {
    width: ${theme.fonts.size.P3};
    height: ${theme.fonts.size.P3};
  }

  img {
    width: 85px;
    height: 60px;
    object-fit: contain;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
  }
  .description {
    margin-left: 21px;
    display: flex;
    flex-direction: column;

    min-width: 0;
    .title {
      font-family: "Amatic SC";
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      color: #17161a;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
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
    &:hover {
      background: blue;
      cursor: pointer;
    }
  }
`;
