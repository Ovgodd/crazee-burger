import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isValidName } from "./utils";
import styled from "styled-components";
import { theme } from "../../../theme";
import { BsPersonCircle } from "react-icons/bs";
import BurgerLogo from "../UI/BurgerLogo";

export default function LoginForm() {
  // state(état, données)
  const [inputName, setInputName] = useState("");
  const navigate = useNavigate();

  // comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`order/${inputName}`);
    setInputName("");
  };

  const handleChange = (event) => {
    const inputUser = event.target.value;
    if (inputUser === "" || isValidName.test(inputUser))
      setInputName(inputUser);
  };

  // affichage

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <BurgerLogo />
      <div className="welcome-container">
        <h2>Bienvenue chez nous !</h2>
        <h3>Connectez-vous</h3>
      </div>
      <div className="identifier-container">
        <BsPersonCircle className="icon" />
        <input
          type="text"
          value={inputName}
          placeholder="Entrez votre prénom..."
          onChange={handleChange}
          required
        />
        <button className="btn">Accédez à mon espace</button>
      </div>
    </LoginFormStyled>
  );
}
const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Amatic SC", cursive;

  .welcome-container {
    margin: -3em;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${theme.colors.white};

    h2 {
      font-size: ${theme.fonts.P4};
      align-items: center;
      display: flex;
      flex-direction: column;
      border-bottom: 3px solid ${theme.colors.red};
      padding-bottom: 30px;
      width: 130%;
    }

    h3 {
      margin-top: ${theme.spacing.xxs};
      font-size: ${theme.fonts.P3};
    }
  }
  .identifier-container {
    margin-top: ${theme.spacing.xl};
    display: flex;
    flex-direction: column;
    width: 40%;
    position: relative;
  }
  input {
    border-radius: ${theme.borderRadius.round};
    border: none;
    font-family: "Open Sans", sans-serif;
    height: 50px;
    text-align: center;
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
