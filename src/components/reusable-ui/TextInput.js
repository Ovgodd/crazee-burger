import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";
import { theme } from "../../theme";

export default function TextInput(props) {
  return (
    <TextInputStyled>
      <BsPersonCircle className="icon" />
      <input
        type="text"
        value={props.inputName}
        placeholder="Entrez votre prénom"
        onChange={props.onInputChange}
        required
      />
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
    width: 330px;
    border-radius: ${theme.borderRadius.round};
    border: none;
    font-family: "Open Sans", sans-serif;
    font-weight: ${theme.weights.light};
    font-size: ${theme.fonts.P0};
  }
  ::placeholder {
    font-size: 40px;
  }
  .icon {
    color: ${theme.colors.greyMedium};
  }
`;
