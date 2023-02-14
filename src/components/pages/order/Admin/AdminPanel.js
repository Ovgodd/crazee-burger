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
  height: 251px;
  box-sizing: border-box;
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.subtle};
`;
