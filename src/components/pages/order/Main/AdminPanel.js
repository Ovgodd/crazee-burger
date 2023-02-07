import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function AdminPanel() {
  return (
    <AdminPanelStyled>
      <div className="tab-container">
        <button className="tab1">tab1</button>
        <button className="tab2">tab2</button>
        <button className="tab3">tab3</button>
      </div>
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
  .tab-container {
    display: grid;
    grid-gap: 1px;
    grid-template-columns: repeat(16, 1fr);
    height: 44px;

    .tab1 {
      grid-column-start: 2;
      grid-column-end: 3;
    }
    .tab2 {
      grid-column-start: 3;
      grid-column-end: 6;
    }
    .tab3 {
      grid-column-start: 6;
      grid-column-end: 9;
    }
  }
`;
