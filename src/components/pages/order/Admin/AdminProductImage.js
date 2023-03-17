import React from "react";
import styled from "styled-components";

export default function AdminProductImage({ productInfo }) {
  return (
    <AdminProductImageStyled>
      {productInfo.imageSource === "" ? (
        <span>Aucune Image</span>
      ) : (
        <img src={productInfo.imageSource} alt="images" />
      )}
    </AdminProductImageStyled>
  );
}
const AdminProductImageStyled = styled.div`  
    height: 120px;
    width: 215px;
    left: 0px;
    top: -1px;
    border-radius: 5px;
    border: 1px solid #e4e5e9;
    padding: 48px, 55px, 48px, 54px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      object-fit: contain;
      height: 100px;
      width: 100px;
    }
  }`;
