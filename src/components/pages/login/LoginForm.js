import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Welcome from "./Welcome";
import { isValidName } from "../../../utils/Regex";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import { theme } from "../../../theme";

export default function LoginForm() {
  const [inputName, setInputName] = useState("");

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
      <TextInput
        value={inputName}
        onChange={handleChange}
        placeholder={"Entrez votre prénom"}
        required
        Icon={<BsPersonCircle className="icon" />}
      />
      <PrimaryButton
        label={"Accédez à mon espace"}
        Icon={<IoChevronForward className="chevron-icon" />}
      />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Amatic SC", cursive;
  text-align: center;

  .chevron-icon {
    transform: translateY(20%);
  }
  .icon {
    color: ${theme.colors.greyBlue};
    margin-right: 15px;
  }
`;
