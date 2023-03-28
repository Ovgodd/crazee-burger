import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import { theme } from "../../../../../theme";
import { getTabsConfig, getTabSelected } from "../getTabsConfig";

export default function AdminPanel() {
  const { selectedTab } = useContext(OrderContext);
  const tabs = getTabsConfig(selectedTab);
  const tabSelected = getTabSelected(tabs, selectedTab);

  return <AdminPanelStyled>{tabSelected.Panel}</AdminPanelStyled>;
}

const AdminPanelStyled = styled.div`
  height: 251px;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-sizing: border-box;
  background: ${theme.colors.white};
  box-shadow: ${theme.shadows.subtle};
`;