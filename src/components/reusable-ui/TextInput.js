import React from "react";
import styled from "styled-components";
import { theme } from "../../theme";

export default function TextInput(props) {
  return (
    <TextInputStyled
      type="text"
      value={props.inputName}
      placeholder="Entrez votre prénom"
      onChange={props.onInputChange}
      required
    />
  );
}
const TextInputStyled = styled.input`
  border-radius: ${theme.borderRadius.round};
  border: 0px solid;
  font-family: "Open Sans", sans-serif;
  align-items: center;
  font-weight: bold;
  height: ${theme.spacing.xl};
  outline: none;
  width: 350px;
  padding-left: ${theme.spacing.xl};

  ::placeholder {
    color: ${theme.colors.greyLight};
    font-weight: lighter;
  }
`;
