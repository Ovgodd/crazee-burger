import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isValidName } from "./utils";
import styled from "styled-components";
import { theme } from "../../../theme";

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
      <h1 className="regular">Bienvenue chez nous</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        type="text"
        value={inputName}
        placeholder="Entrez votre prénom"
        onChange={handleChange}
        required
      />
      <button>Accédez à mon espace</button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form``;
