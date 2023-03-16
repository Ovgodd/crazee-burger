import React from "react";
import { TiDelete } from "react-icons/ti";
import styled from "styled-components";

export default function DeleteButton({ handleDelete }) {
  return (
    <DeleteButtonStyled onClick={handleDelete}>
      <TiDelete className="icon" />
    </DeleteButtonStyled>
  );
}
const DeleteButtonStyled = styled.button`
  top: 15px;
  right: 10px;
  background: none;
  border: none;
  color: #ffa01b;
  position: absolute;
  cursor: pointer;
  .icon {
    width: 30px;
    height: 30px;
  }
`;
