import React from "react";
import styled from "styled-components";
import Input from "../../../reusable-ui/Input";
import { getInputConfig } from "./getInputConfig";

export default function AdminInputs({ onChange, onImageChange }) {
  const inputs = getInputConfig();
  return (
    <AdminInputsStyled>
      {inputs.map((input) => (
        <Input
          key={input.id}
          type={input.type}
          Icon={input.Icon}
          label={input.label}
          name={input.name}
          onChange={onChange}
          onImageChange={onImageChange}
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
