import React, { useContext } from "react";
import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../theme";
import OrderContext from "../../../../context/OrderContext";
import Tab from "../../../reusable-ui/Tab";
import { getTabsConfig } from "./getTabsConfig";

export default function AdminTabs() {
  const {
    setIsCardSelected,
    isCollapsed,
    setIsCollapsed,
    selectedTab,
    setSelectedTab,
    setProductInfo,
    setSelectedProduct,
    DEFAULT_PRODUCT_INFO,
  } = useContext(OrderContext);

  const selectTab = (tabSelected) => {
    setSelectedTab(tabSelected);
    if (isCollapsed) setIsCollapsed(false);
    if (tabSelected === "add") {
      setSelectedProduct(false);
      setProductInfo(DEFAULT_PRODUCT_INFO);
    }
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
