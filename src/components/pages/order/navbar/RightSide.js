import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function RightSide() {
  const { username } = useParams();
  return (
    <RightSideStyled>
      <div className="welcome-container">
        <h1 className="welcome-text">Hey, {username}</h1>
        <a className="link" href="/">
          Se déconnecter
        </a>
      </div>
      <BsPersonCircle className="icon" />
    </RightSideStyled>
  );
}
const RightSideStyled = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-around;
  align-content: space-around;
  margin-right: 70px;
  background-color: purple;
  .welcome-container {
    background: green;
  }
  .welcome-text {
    font-family: "Open Sans", sans-serif;
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.P0};
    right: 0;
  }
  .link {
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.P0};
    margin-bottom: 50px;
  }

  .icon {
    height: 36px;
    width: 36px;
    color: ${theme.colors.greyBlue};
  }
`;
