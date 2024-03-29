import LoginForm from "./LoginForm";
import styled from "styled-components";
import Background from "../../../images/F03-burger-background.jpg";
import BurgerLogo from "../../reusable-ui/BurgerLogo";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <BurgerLogo className={"logo-login-page"} />
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
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
    filter: brightness(30%);
  }

  .logo-login-page {
    margin-bottom: 50px;
    transform: scale(2.5);
  }
`;
