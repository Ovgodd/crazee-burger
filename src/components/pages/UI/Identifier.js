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
      <div className="identifier-container">
        <BsPersonCircle className="icon" />
        <input
          type="text"
          value={inputName}
          placeholder="Entrez votre prénom..."
          onChange={handleChange}
          required
        />
        <button className="btn">Accédez à mon espace </button>
      </div>
    </IdentifierStyled>
  );
}
const IdentifierStyled = styled.div`
  justify-content: center;
  width: 40%;
  .identifier-container {
    margin-top: ${theme.spacing.xl};
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
  }
  input {
    border-radius: ${theme.borderRadius.round};
    border: 0px solid;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    height: 50px;
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
    margin-top: ${theme.spacing.xs};
    border-radius: ${theme.borderRadius.round};
    border: none;
    background-color: ${theme.colors.primary_burger};
    color: ${theme.colors.white};
    font-family: "Open Sans", sans-serif;
    height: 50px;
  }
  button:active {
    background-color: ${theme.colors.white};
    border-color: ${theme.colors.primary_burger};
    color: ${theme.colors.primary_burger};
    border: 1px solid;
  }

  .icon {
    color: ${theme.colors.greySemiDark};
    height: 1rem;
    width: 1rem;
    transform: translateY(210%);
    padding-left: 20px;
  }
`;
