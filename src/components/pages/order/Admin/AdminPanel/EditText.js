import React from "react";
import { HiCursorClick } from "react-icons/hi";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function EditText() {
  return (
    <EditTextStyled>
      <span>Cliquer sur un produit du menu pour le modifier</span>
      <HiCursorClick className="icon" />
    </EditTextStyled>
  );
}
const EditTextStyled = styled.div`
  padding: 71px 81px 129px;
  font-family: "Amatic SC";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  margin-right: 10px;
  align-items: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${theme.colors.greyBlue};
  .icon {
    width: 20.2px;
    height: 20.2px;
    margin-left: 10px;

    color: ${theme.colors.greyBlue};
  }
`;
