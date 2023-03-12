import React from "react";
import styled from "styled-components";
import AdminAddProduct from "../../../reusable-ui/AdminAddProduct";
import { getInputConfig } from "./getInputConfig";
import Input from "./Input";

export default function AdminInputs() {
  const inputs = getInputConfig();
  return (
    <AdminInputsStyled>
      {inputs.map((input) => (
        <Input type={input.type} Icon={input.Icon} label={input.label} />
      ))}
      <AdminAddProduct />
    </AdminInputsStyled>
  );
}
const AdminInputsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 645px;
  height: 121px;
  margin-left: 20px;
`;
