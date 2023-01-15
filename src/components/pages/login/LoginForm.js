import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BurgerLogo from "../../reusable-ui/BurgerLogo";
import Welcome from "./Welcome";

import { theme } from "../../../theme";
import { isValidName } from "../../../utils";
import { BsPersonCircle } from "react-icons/bs";

export default function LoginForm() {
  // state(état, données)
  const [inputName, setInputName] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    const inputUser = event.target.value;
    if (inputUser === "" || isValidName.test(inputUser))
      setInputName(inputUser);
  };
  // comportements
  const handleSubmit = () => {
    navigate(`order/${inputName}`);
  };

  // affichage

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <BurgerLogo />
      <Welcome />
      <BsPersonCircle className="icon" />
      <input
        type="text"
        value={inputName}
        placeholder="Entrez votre prénom"
        onChange={handleChange}
        required
      />
      <button className="btn">Accédez à mon espace &#62;</button>
    </LoginFormStyled>
  );
}
const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Amatic SC", cursive;
  margin-top: ${theme.spacing.xxs};

  input {
    border-radius: ${theme.borderRadius.round};
    border: 0px solid;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    height: ${theme.spacing.xxl};
    outline: none;
    width: 40%;
    padding-left: ${theme.spacing.xl};

    ::placeholder {
      color: ${theme.colors.greyLight};
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
    width: 45%;
  }
  button:active {
    background-color: ${theme.colors.white};
    border-color: ${theme.colors.primary_burger};
    color: ${theme.colors.primary_burger};
    border: 1px solid;
  }

  .icon {
    color: ${theme.colors.greySemiDark};
    height: 20px;
    width: 20px;
    transform: translateY(230%);
    margin-right: 440px;
  }
`;
