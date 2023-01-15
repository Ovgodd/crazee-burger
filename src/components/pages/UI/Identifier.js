import React, { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";
import { theme } from "../../../theme";
import { isValidName } from "../login/utils";

export default function Identifier() {
  const [inputName, setInputName] = useState("");
  const handleChange = (event) => {
    const inputUser = event.target.value;
    if (inputUser === "" || isValidName.test(inputUser))
      setInputName(inputUser);
  };
  return (
    <IdentifierStyled>
      <BsPersonCircle className="icon" />
      <input
        type="text"
        value={inputName}
        placeholder="Entrez votre prénom"
        onChange={handleChange}
        required
      />
      <button className="btn">Accédez à mon espace &#62;</button>
    </IdentifierStyled>
  );
}
const IdentifierStyled = styled.div`
  justify-content: center;
  width: 50%;
  margin-top: ${theme.spacing.xxs};
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;

  input {
    border-radius: ${theme.borderRadius.round};
    border: 0px solid;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    height: ${theme.spacing.xxl};
    text-align: left;
    outline: none;
    padding-left: ${theme.spacing.xl};
    ::placeholder {
      color: ${theme.colors.greyLight};
      padding-right: ${theme.spacing.xxl};
      font-weight: lighter;
    }
  }

  button {
    margin-top: ${theme.spacing.md};
    border-radius: ${theme.borderRadius.round};
    border: none;
    background-color: ${theme.colors.primary_burger};
    color: ${theme.colors.white};
    font-family: "Open Sans", sans-serif;
    font-weight: ${theme.weights.semiBold};
    font-size: ${theme.spacing.md};
    letter-spacing: 1px;
    height: ${theme.spacing.xxl};
  }
  button:active {
    background-color: ${theme.colors.white};
    border-color: ${theme.colors.primary_burger};
    color: ${theme.colors.primary_burger};
    border: 1px solid;
  }

  .icon {
    color: ${theme.colors.greySemiDark};
    transform: translateY(230%);
    padding-left: ${theme.spacing.md};
    width: ${theme.spacing.md};
    height: ${theme.spacing.md};
  }
`;
