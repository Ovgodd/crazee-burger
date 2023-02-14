import React, { useContext } from "react";
import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../theme";
import OrderContext from "../../../../context/OrderContext";
import Tab from "../../../reusable-ui/Tab";
import { getTabsConfig } from "./getTabsConfig";
export default function AdminTabs() {
  const { isCollapsed, setisCollapsed, selectedTab, setselectedTab } =
    useContext(OrderContext);

  const selectTab = (tabSelected) => {
    setselectedTab(tabSelected);
    if (isCollapsed) setisCollapsed(false);
  };

  const openPanel = () => {
    setisCollapsed(!isCollapsed);
  };
  const tabs = getTabsConfig();

  return (
    <AdminTabsStyled>
      <Tab
        className={isCollapsed ? "is-selected" : ""}
        Icon={isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
        text={""}
        onClick={openPanel}
      />
      {tabs.map((tab) => (
        <Tab
          label={tab.label}
          Icon={tab.Icon}
          onClick={() => selectTab(tab.index)}
          className={selectedTab === tab.index ? "is-selected" : ""}
        />
      ))}
    </AdminTabsStyled>
  );
}
const AdminTabsStyled = styled.div`
  display: flex;
  box-shadow: ${theme.shadows.subtle};

  .is-selected {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
    border-bottom: 2px solid ${theme.colors.background_dark};
  }
`;
