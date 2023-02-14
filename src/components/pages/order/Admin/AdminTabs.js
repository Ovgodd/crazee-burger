import React, { useContext } from "react";
import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../theme";
import OrderContext from "../../../../context/OrderContext";
import Tab from "../../../reusable-ui/Tab";
export default function AdminTabs() {
  const { isCollapsed, setisCollapsed, selectedTab, setselectedTab } =
    useContext(OrderContext);

  const selectTab = (index) => {
    setselectedTab(index);
    if (isCollapsed) setisCollapsed(false);
  };

  const openPanel = () => {
    setisCollapsed(!isCollapsed);
  };

  return (
    <AdminTabsStyled>
      <Tab
        className={isCollapsed ? "tab1-close" : "tab1"}
        Icon={isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
        text={""}
        onClick={openPanel}
      />
      <Tab
        className={selectedTab === 2 ? "tab2" : "tab2-close"}
        Icon={<AiOutlinePlus />}
        label={"Ajouter un produit"}
        onClick={() => selectTab(2)}
      />
      <Tab
        className={selectedTab === 3 ? "tab3" : "tab3-close"}
        Icon={<MdModeEditOutline />}
        label={"Modifier un produit"}
        onClick={() => selectTab(3)}
      />
    </AdminTabsStyled>
  );
}
const AdminTabsStyled = styled.div`
  display: flex;
  box-shadow: ${theme.shadows.subtle};
  .tab1 {
    grid-column-start: 2;
    grid-column-end: 3;
  }
  .tab1-close {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
    grid-column-start: 2;
    grid-column-end: 3;
  }

  .tab2 {
    grid-column-start: 3;
    grid-column-end: 6;
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
    &:hover {
      text-decoration: underline;
      color: ${theme.colors.white};
    }
  }
  .tab2-close {
    grid-column-start: 3;
    grid-column-end: 6;
    background-color: ${theme.colors.white};
    color: ${theme.colors.greySemiDark};
    &:hover {
      text-decoration: underline;
      color: ${theme.colors.greySemiDark};
    }
  }

  .tab3 {
    grid-column-start: 6;
    grid-column-end: 9;
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
    &:hover {
      text-decoration: underline;
      color: ${theme.colors.white};
    }
  }
  .tab3-close {
    grid-column-start: 6;
    grid-column-end: 9;
    background-color: ${theme.colors.white};
    color: ${theme.colors.greySemiDark};
    &:hover {
      text-decoration: underline;
      color: ${theme.colors.greySemiDark};
    }
  }
`;
