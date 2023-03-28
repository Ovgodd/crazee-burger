import React from "react";
import { TiDelete } from "react-icons/ti";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function DeleteButton({ onClick }) {
  return (
    <DeleteButtonStyled onClick={onClick}>
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
`;
