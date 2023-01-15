import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isValidName } from "./utils";
import styled from "styled-components";
import { theme } from "../../../theme";
import { BsPersonCircle } from "react-icons/bs";
import BurgerLogo from "../UI/BurgerLogo";
import Welcome from "./Welcome";
import Identifier from "../UI/Identifier";

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

  // affichage

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <BurgerLogo />
      <Welcome />
      <Identifier />
    </LoginFormStyled>
  );
}
const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Amatic SC", cursive;
`;
