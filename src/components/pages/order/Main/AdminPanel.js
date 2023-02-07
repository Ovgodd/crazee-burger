import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import Tabs from "./Tabs";

export default function AdminPanel() {
  return (
    <AdminPanelStyled>
      <Tabs />
      <div className="add-product">
        <p>ajouter un produit</p>
      </div>
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  position: absolute;
  height: 300px;
  width: 1400px;
  bottom: 20px;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-sizing: border-box;
  overflow: hidden;
  .add-product {
    background: ${theme.colors.background_white};
    position: absolute;
    height: 300px;
    width: 1400px;
    border-top: 1px solid #e4e5e9;
    box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);
  }
`;
