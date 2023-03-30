import React from "react";
import styled, { css } from "styled-components";
import { theme } from "../../../theme";

export default function Button({
  variant = "normal",
  className,
  label,
  Icon,
  onClick,
}) {
  return (
    <ButtonStyled variant={variant} className={className} onClick={onClick}>
      {label}
      {Icon && Icon}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  width: 100%;
  padding: 18px 24px;
  font-size: 15px;
  align-self: center;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: ${theme.borderRadius.round};
  border: none;
  font-family: "Arial";
  font-style: normal;
  font-weight: ${theme.fonts.weights.bold};
  line-height: 1;
  cursor: pointer;
  &:active {
    border: 1px solid;
  }
  &:hover {
    border: 1px solid;
    transition: 0.3s;
    cursor: pointer;
  }
  ${({ variant }) => buttonStyle[variant]}
`;

const normalStyle = css`
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  font-size: ${theme.fonts.size.SM};
  &:active {
    background-color: ${theme.colors.white};
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
  }
  &:hover {
    background-color: ${theme.colors.white};
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
    cursor: pointer;
  }
`;
const successStyle = css`
  padding: 10px 29px 9px 29px;
  width: 275px;
  height: 35px;
  bottom: 0;
  position: absolute;
  background: ${theme.colors.success};
  border: 1px solid ${theme.colors.success};
  color: ${theme.colors.white};
  font-size: ${theme.fonts.size.XS};
  left: 235px;
  &:hover {
    background-color: ${theme.colors.white};
    border-color: ${theme.colors.success};
    color: ${theme.colors.success};
  }
  &:active {
    background-color: ${theme.colors.success};
    border-color: ${theme.colors.white};
    color: ${theme.colors.white};
    transition: 0.3s;
  }
`;
const buttonStyle = {
  normal: normalStyle,
  success: successStyle,
};
