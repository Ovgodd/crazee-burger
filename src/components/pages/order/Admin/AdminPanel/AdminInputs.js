import React, { useRef } from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";
import TextInput from "../../../../reusable-ui/TextInput";
import { getInputsConfig } from "./getInputsConfig";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function AdminInputs({ onChange, productInfo }) {
  const { isCardSelected } = useContext(OrderContext);
  const inputs = getInputsConfig(productInfo);
  // const inputRef = useRef();

  // useEffect(() => {
  //   if (isCardSelected && inputRef.current) {
  //     inputRef.current.focus();
  //   }
  // }, [isCardSelected]);

  return (
    <AdminInputsStyled>
      {inputs.map((input, index) => (
        <TextInput
          key={input.id}
          {...input}
          onChange={onChange}
          variant="minimalist"
          autoFocus={index === 0 && isCardSelected}
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
