import React from "react";
import styled from "styled-components";

export default function AdminAddProduct() {
  return (
    <AdminAddProductStyled>
      Ajouter un nouveau produit au menu
    </AdminAddProductStyled>
  );
}
const AdminAddProductStyled = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px 29px 9px 29px;
  position: absolute;
  background: #60bd4f;
  border: 1px solid #60bd4f;
  border-radius: 5px;
  width: 275px;
  height: 34px;
  bottom: 0;
  color: white;
  font-size: 12px;
  font-family: "Arial";
  font-style: normal;
  font-weight: 700;
  align-items: center;
  text-align: center;
`;
