import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext";
import { theme } from "../../../../theme";

export default function AdminPanel() {
  const { selectedTab, setselectedTab } = useContext(OrderContext);
  return (
    <AdminPanelStyled>
      <span>
        {selectedTab === 2 ? "Ajouter un produit" : "Modifier un produit"}
      </span>
    </AdminPanelStyled>
  );
}
const AdminPanelStyled = styled.div`
  padding: 10px;
  background: ${theme.colors.white};
  position: absolute;
  height: 300px;
  width: 1400px;
  box-shadow: ${theme.shadows.subtle};
`;
