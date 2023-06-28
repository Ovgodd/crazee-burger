import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import { getTabsConfig, getTabSelected } from "../getTabsConfig";
import { DEFAULT_PRODUCT_INFO } from "../../../../enums/product";

export default function AdminPanel() {
  const { selectedTab, selectedProduct } = useContext(OrderContext);
  const hasAlreadyBeenClicked = selectedProduct !== DEFAULT_PRODUCT_INFO;
  const tabs = getTabsConfig(hasAlreadyBeenClicked);
  const tabSelected = getTabSelected(tabs, selectedTab);

  return (
    <AdminPanelStyled>{tabSelected && tabSelected.Panel}</AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  height: 251px;
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-sizing: border-box;
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.subtle};
`;
