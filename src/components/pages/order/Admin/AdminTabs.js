import React, { useContext } from "react";
import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../theme";
import OrderContext from "../../../../context/OrderContext";
import Tab from "../../../reusable-ui/Tab";
import { getTabsConfig } from "./getTabsConfig";

export default function AdminTabs() {
  const { isCollapsed, setIsCollapsed, selectedTab, setselectedTab } =
    useContext(OrderContext);

  const selectTab = (tabSelected) => {
    setselectedTab(tabSelected);
    if (isCollapsed) setIsCollapsed(false);
  };

  const openPanel = () => {
    setIsCollapsed(!isCollapsed);
  };
  const tabs = getTabsConfig();

  return (
    <AdminTabsStyled>
      <Tab
        className={isCollapsed ? "is-selected" : ""}
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        text={""}
        onClick={openPanel}
      />
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
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
  position: absolute;
  top: -43px;
  left: 5%;
  .is-selected {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
    border-bottom: 2px solid ${theme.colors.background_dark};
  }
`;
