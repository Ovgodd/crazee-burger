import styled from "styled-components";
import { theme } from "../../../../../theme";
import TextInput from "../../../../reusable-ui/TextInput";
import { getInputsConfig } from "./getInputsConfig";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import React from "react";

const AdminInputs = React.forwardRef(({ newProductInfo, onChange }, ref) => {
  const { isCardSelected } = useContext(OrderContext);
  const inputs = getInputsConfig(newProductInfo);

  return (
    <AdminInputsStyled>
      {inputs.map((input, index) => (
        <TextInput
          key={input.id}
          {...input}
          onChange={onChange}
          variant="minimalist"
          isCardSelected={isCardSelected}
          inputIndex={index}
          ref={index === 0 ? ref : null}
        />
      ))}
    </AdminInputsStyled>
  );
});

const AdminInputsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  width: 645px;
  margin-left: ${theme.spacing.md};
`;

export default AdminInputs;
