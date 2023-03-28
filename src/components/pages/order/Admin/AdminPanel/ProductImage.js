import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function ProductImage({ imageSource, title }) {
  return (
    <ProductImageStyled>
      {imageSource === "" ? (
        <div className="empty-image">
          <span>Aucune Image</span>
        </div>
      ) : (
        <img src={imageSource} alt={title} />
      )}
    </ProductImageStyled>
  );
}

const ProductImageStyled = styled.div`
  left: 0px;
  top: -1px;
  height: 120px;
  width: 215px;
  padding: 48px, 55px, 48px, 54px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .empty-image {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120px;
    width: 215px;
    border: 1px solid ${theme.colors.greyLight};
    border-radius: ${theme.borderRadius.round};
  }

  img {
    object-fit: contain;
    height: 100px;
    width: 100px;
  }
`;
