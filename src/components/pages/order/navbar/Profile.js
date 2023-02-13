import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Profile({ username }) {
  return (
    <ProfileStyled>
      <div className="welcome-container">
        <h1 className="welcome-text">
          Hey, <b>{username}</b>
        </h1>
        <a className="link" href="/">
          Se déconnecter
        </a>
      </div>
      <BsPersonCircle className="icon" />
    </ProfileStyled>
  );
}
const ProfileStyled = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  object-fit: cover;
  .welcome-container {
    display: flex;
    flex-direction: column;
    padding-right: ${theme.spacing.sm};
    text-align: right;
    padding-bottom: ${theme.spacing.xs};
    .welcome-text {
      line-height: ${theme.spacing.xs};
      color: ${theme.colors.greyBlue};
      font-size: ${theme.fonts.size.SM};
      font-weight: ${theme.fonts.weights.medium};
      text-align: right;
      b {
        color: ${theme.colors.primary};
      }
    }
    a {
      &:hover {
        text-decoration: underline;
        color: ${theme.colors.greyDark};
      }
    }
    .link {
      color: ${theme.colors.greyBlue};
      font-size: ${theme.fonts.size.XXS};
      text-decoration: none;
    }
  }

  .icon {
    height: 36px;
    width: 36px;
    color: ${theme.colors.greyBlue};
  }
`;
