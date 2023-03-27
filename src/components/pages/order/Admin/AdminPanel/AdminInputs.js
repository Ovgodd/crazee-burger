import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import TextInput from "../../../../reusable-ui/TextInput";
import { getInputsConfig } from "./getInputsConfig";

export default function AdminInputs({ onChange, productInfo }) {
  const inputs = getInputsConfig(productInfo);

  return (
    <AdminInputsStyled>
      {inputs.map((input) => (
        <TextInput
          key={input.id}
          {...input}
          onChange={onChange}
          variant="minimalist"
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
