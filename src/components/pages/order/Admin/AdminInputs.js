import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Input from "../../../reusable-ui/Input";
import { getInputConfig } from "./getInputConfig";

export default function AdminInputs({ onChange, productInfo }) {
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
          value={productInfo[input.name]}
        />
      ))}
    </AdminInputsStyled>
  );
}
const AdminInputsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${theme.spacing.xs};
  width: 645px;
  height: 121px;
  margin-left: ${theme.spacing.md};
`;
