import React from "react";
import { TiDelete } from "react-icons/ti";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function DeleteButton({ onClick, className }) {
  return (
    <DeleteButtonStyled onClick={onClick} className={className}>
      <TiDelete className="icon" />
    </DeleteButtonStyled>
  );
}

const DeleteButtonStyled = styled.button`
  top: 15px;
  right: 10px;
  background: none;
  border: none;
  color: ${theme.colors.primary};
  position: absolute;
  cursor: pointer;

  .icon {
    width: 30px;
    height: 30px;
  }
  &:hover {
    color: ${theme.colors.red};
  }
  &:active {
    color: ${theme.colors.primary};
    transition: 0.3s;
  }
`;
