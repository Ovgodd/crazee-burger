import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext";
import { theme } from "../../../../theme";
import { getTabsConfig, getTabSelected } from "./getTabsConfig";

export default function AdminPanel() {
  const { selectedTab } = useContext(OrderContext);

  const tabs = getTabsConfig(selectedTab);
  const tabSelected = getTabSelected(tabs, selectedTab);
  return (
    <AdminPanelStyled>{tabSelected && tabSelected.label}</AdminPanelStyled>
  );
}
const AdminPanelStyled = styled.div`
  height: 251px;
  box-sizing: border-box;
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.subtle};
`;
