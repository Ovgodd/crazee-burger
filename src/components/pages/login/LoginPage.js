import LoginForm from "./LoginForm";
import styled from "styled-components";
import Background from "../../../images/F03-burger-background.jpg";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <LoginForm />
    </LoginPageStyled>
  );
}
const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url(${Background});
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }
`;
