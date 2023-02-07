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
      <p>ajouter un produit</p>
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  background: red;
  position: absolute;
  height: 300px;
  width: 1385px;
  bottom: 20px;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  .tab-container {
    background: green;
    display: grid;
    grid-gap: 1px;
    grid-template-columns: repeat(12, 4fr);
    border: 1px solid yellow;
    height: 44px;
    .tab1 {
      border: 1px solid blue;
      margin-left: 70px;
      width: 70px;
    }
    .tab2 {
      border: 1px solid blue;
      margin-left: 70px;
      width: 150px;
    }
    .tab3 {
      border: 1px solid blue;
      margin-left: 70px;
      width: 150px;
    }
  }
`;
