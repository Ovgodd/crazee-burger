import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Welcome from "./Welcome";
import { isValidName } from "../../../utils/Regex";
import TextInput from "../../reusable-ui/TextInput";
import Button from "../../reusable-ui/Buttons/Button";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import { theme } from "../../../theme";
import { createUser, getUser } from "../../../api/user";

export default function LoginForm() {
  const [username, setUsername] = useState("Cyril");

  const navigate = useNavigate();

  const handleChange = (event) => {
    const inputUser = event.target.value;
    if (inputUser === "" || isValidName.test(inputUser)) setUsername(inputUser);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    createUser(username);
    const userReceived = await getUser(username);
    // authenticateUser(username);

    navigate(`order/${username}`, { state: { user: userReceived } });
    setUsername("");
  };

  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <Welcome />
      <div className="input-login">
        <TextInput
          value={username}
          onChange={handleChange}
          placeholder={"Entrez votre prénom"}
          required
          Icon={<BsPersonCircle />}
          variant="normal"
        />
        <Button label={"Accédez à mon espace"} Icon={<IoChevronForward />} />
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: ${theme.fonts.family.stylish};
  max-width: 500px;
  margin: 0px auto;

  .input-login {
    min-height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
