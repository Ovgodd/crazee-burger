import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isValidName } from "./utils";
import styled from "styled-components";
import { theme } from "../../../theme";
import Logo from "../../../images/F03 logo-orange.png";

export default function LoginForm() {
  // state(état, données)
  const [inputName, setInputName] = useState("");
  const navigate = useNavigate();

  // comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputName("");
    navigate(`order/${inputName}`);
  };

  const handleChange = (event) => {
    const inputUser = event.target.value;
    if (inputUser === "" || isValidName.test(inputUser))
      setInputName(inputUser);
  };

  // affichage

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <div className="logo-container">
        <h1 className="title">CRAZEE</h1>
        <img className="logo" src={Logo} alt="Logo" />
        <h1 className="title">BURGER</h1>
      </div>
      <div className="welcome-container">
        <h2>Bienvenue chez nous !</h2>
        <h3>Connectez-vous</h3>
      </div>
      <div className="identifier-container">
        <input
          type="text"
          value={inputName}
          placeholder="Entrez votre prénom"
          onChange={handleChange}
          required
        />
        <button>Accédez à mon espace</button>
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Amatic SC", cursive;
  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${theme.fonts.P6};
    h1 {
      font-size: ${theme.fonts.P6};
      color: ${theme.colors.primary};
    }
    .logo {
      height: 40%;
      width: 40%;
    }
  }

  .welcome-container {
    margin: -4em;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${theme.colors.white};
    h2 {
      font-size: ${theme.fonts.P4};
    }
    h3 {
      margin-top: ${theme.spacing.md};
      font-size: ${theme.fonts.P3};
    }
  }
  .identifier-container {
    margin: ${theme.spacing.xl};
    display: flex;
    flex-direction: column;
    margin-bottom: ${theme.spacing.xxs};
    input {
      border-radius: ${theme.borderRadius.round};
    }
    button {
      border-radius: ${theme.borderRadius.round};
    }
  }
`;
