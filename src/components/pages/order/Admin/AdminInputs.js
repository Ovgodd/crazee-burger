import React from "react";
import styled from "styled-components";
import { getInputConfig } from "./getInputConfig";
import Input from "../../../reusable-ui/Input";

export default function AdminInputs() {
  const inputs = getInputConfig();
  return (
    <AdminInputsStyled>
      {inputs.map((input) => (
        <Input
          key={input.id}
          type={input.type}
          Icon={input.Icon}
          label={input.label}
        />
      ))}
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
