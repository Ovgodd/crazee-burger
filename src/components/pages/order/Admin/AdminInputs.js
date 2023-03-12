import React from "react";
import styled from "styled-components";
import AdminAddProduct from "../../../reusable-ui/AdminAddProduct";
import Input from "./Input";

export default function AdminInputs() {
  return (
    <AdminInputsStyled>
      <Input />
      <Input />
      <Input />
      <AdminAddProduct />
    </AdminInputsStyled>
  );
}
const AdminInputsStyled = styled.div`
  background: green;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 645px;
  height: 121px;
  margin-left: 20px;
`;
