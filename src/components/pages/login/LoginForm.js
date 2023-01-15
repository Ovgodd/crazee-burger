import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BurgerLogo from "../../reusable-ui/BurgerLogo";
import Welcome from "./Welcome";

import { theme } from "../../../theme";
import { isValidName } from "../../../utils";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "../../reusable-ui/PrimaryButton";

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
      <TextInput inputInfo={inputName} onInputChange={handleChange} />
      <PrimaryButton />
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

  .icon {
    color: ${theme.colors.greySemiDark};
    height: 20px;
    width: 20px;
    transform: translateY(230%);
    margin-right: 440px;
  }
`;
