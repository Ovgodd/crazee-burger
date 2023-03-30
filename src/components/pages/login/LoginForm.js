import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Welcome from "./Welcome";
import { isValidName } from "../../../utils/Regex";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "../../reusable-ui/Buttons/PrimaryButton";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";

export default function LoginForm() {
  const [inputName, setInputName] = useState("Cyril");

  const navigate = useNavigate();

  const handleChange = (event) => {
    const inputUser = event.target.value;
    if (inputUser === "" || isValidName.test(inputUser))
      setInputName(inputUser);
  };

  const handleSubmit = () => {
    navigate(`order/${inputName}`);
  };

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <Welcome />
      <div className="input-login">
        <TextInput
          value={inputName}
          onChange={handleChange}
          placeholder={"Entrez votre prénom"}
          required
          Icon={<BsPersonCircle />}
          variant="normal"
        />
        <PrimaryButton
          label={"Accédez à mon espace"}
          Icon={<IoChevronForward />}
        />
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "Amatic SC", cursive;
  max-width: 500px;
  margin: 0px auto;
  .input-login {
    min-height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
