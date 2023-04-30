import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../theme";
import { MdDeleteForever } from "react-icons/md";

export default function BasketCard({
  imageSource,
  title,
  price,
  quantity,
  onDelete,
  onClick,
  isSelected,
  isAdmin,
}) {
  return (
    <BasketCardStyled
      isSelectable={isAdmin}
      onClick={onClick}
      isSelected={isSelected}
    >
      <button onClick={onDelete} className="delete">
        <MdDeleteForever className="icon" />
      </button>

      <div className="image">
        <img className="product-image" src={imageSource} alt="product" />
      </div>
      <div className="info-container">
        <div className="description">
          <span className="title">{title}</span>
          <span className="price">{price}</span>
        </div>
        <div className="quantity">
          <span>x {quantity}</span>
        </div>
      </div>
    </BasketCardStyled>
  );
}

const BasketCardStyled = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
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

  cursor: ${({ isSelectable }) => (isSelectable ? "pointer" : "auto")};

  ${({ isSelected, isSelectable }) =>
    isSelected && isSelectable && selectedStyle}

  .image {
    box-sizing: border-box;
    height: 70px;
    img {
      padding: 5px;
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
  .info-container {
    user-select: none;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 70% 1fr;
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.primary};

    .description {
      display: grid;
      grid-template-rows: 60% 40%;
      margin-left: 21px;

      .title {
        font-family: ${theme.fonts.family.stylish};
        font-weight: ${theme.fonts.weights.bold};
        font-size: ${theme.fonts.size.P3};
        line-height: 32px;
        color: ${theme.colors.dark};
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .price {
        font-family: "Open Sans";
        font-size: ${theme.fonts.size.SM};
      }
    }

    .quantity {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .delete {
    display: none;
    z-index: 1;
  }

  :hover {
    .delete {
      box-sizing: border-box;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 76px;
      right: 0px;
      top: 0px;
      bottom: 0px;
      background: ${theme.colors.red};
      border-radius: 0px 5px 5px 0px;
      border-color: transparent;
      cursor: pointer;
      &:hover .icon {
        color: ${theme.colors.background_dark};
      }
      &:active .icon {
        color: ${theme.colors.white};
        transition: 0.3s;
      }
      .icon {
        width: ${theme.fonts.size.P3};
        height: ${theme.fonts.size.P3};
        color: ${theme.colors.white};
      }
    }
  }
`;
const selectedStyle = css`
  background: ${theme.colors.primary};

  .price {
    color: ${theme.colors.white};
  }
  .quantity {
    color: ${theme.colors.white};
  }
`;
