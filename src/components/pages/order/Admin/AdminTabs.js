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
        className={isCollapsed ? "is-selected" : ""}
        Icon={isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
        text={""}
        onClick={openPanel}
      />
      <Tab
        className={selectedTab === "add" ? "is-selected" : ""}
        Icon={<AiOutlinePlus />}
        label={"Ajouter un produit"}
        onClick={() => selectTab("add")}
      />
      <Tab
        className={selectedTab === "edit" ? "is-selected" : ""}
        Icon={<MdModeEditOutline />}
        label={"Modifier un produit"}
        onClick={() => selectTab("edit")}
      />
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
  }
`;
