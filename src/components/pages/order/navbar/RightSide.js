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
  align-items: center;
  justify-content: space-around;
  align-content: space-around;
  margin-right: 70px;
  .welcome-container {
    display: block;
    align-items: center;

    margin-right: 10px;
  }
  .welcome-text {
    line-height: 0px;
    font-family: "Open Sans", sans-serif;
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.P1};
    font-weight: ${theme.weights.medium};
    text-align: right;
  }
  .link {
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.XS};
    text-decoration: none;
  }

  .icon {
    height: 36px;
    width: 36px;
    color: ${theme.colors.greyBlue};
  }
`;
