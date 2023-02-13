import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext";
import { theme } from "../../../../theme";

export default function PanelAdminContent() {
  const { adminTab, setAdminTab } = useContext(OrderContext);
  return (
    <PanelAdminContentStyled className="product-container">
      <span>
        {adminTab === 2 ? "Ajouter un produit" : "Modifier un produit"}
      </span>
    </PanelAdminContentStyled>
  );
}
const PanelAdminContentStyled = styled.div`
  padding: 10px;
  background: ${theme.colors.white};
  position: absolute;
  height: 300px;
  width: 1400px;
  box-shadow: ${theme.shadows.subtle};
`;
