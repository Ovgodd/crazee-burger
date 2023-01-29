import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  return (
    <TextInputStyled>
      {Icon && Icon}
      <input value={value} onChange={onChange} type="text" {...extraProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  align-items: center;
  font-weight: bold;
  outline: none;
  background-color: white;
  display: flex;
  border-radius: ${theme.borderRadius.round};
  padding: 18px 24px;

  input {
    width: 355px;
    border-radius: ${theme.borderRadius.round};
    border: none;
    font-family: "Open Sans", sans-serif;
    font-size: ${theme.fonts.P0};
    ::placeholder {
      font-size: ${theme.fonts.P0};
      font-weight: ${theme.weights.light};
      color: ${theme.colors.greyMedium};
    }
  }
`;
