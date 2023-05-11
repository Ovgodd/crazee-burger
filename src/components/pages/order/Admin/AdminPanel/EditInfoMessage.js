import React from "react";
import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function EditInfoMessage() {
  return (
    <EditInfoMessageStyled>
      Cliquer sur un produit du menu pour le modifier&nbsp;
      <span className="live-update">en temps réel</span>
    </EditInfoMessageStyled>
  );
}

const EditInfoMessageStyled = styled.div`
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.size.SM};
  position: relative;
  left: 235px;
  bottom: 0px;

  .live-update {
    text-decoration: underline;
  }
`;
