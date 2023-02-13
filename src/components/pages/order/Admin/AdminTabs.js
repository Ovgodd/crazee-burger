import React, { useContext } from "react";
import styled from "styled-components";
import TabButton from "../../../reusable-ui/Tabs";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../theme";
import OrderContext from "../../../../context/OrderContext";
export default function PanelAdminTabs() {
  const { isCollapse, setIsCollapse } = useContext(OrderContext);

  const { adminTab, setAdminTab } = useContext(OrderContext);

  const selectTab = (index) => {
    setAdminTab(index);
    if (isCollapse) setIsCollapse(false);
    console.log(index);
  };

  const openAdminTabPanel = () => {
    setIsCollapse(!isCollapse);
    console.log("panel behaviour");
  };

  return (
    <TabsStyled>
      <TabButton
        className={isCollapse ? "tab1-close" : "tab1"}
        Icon={isCollapse ? <FiChevronDown /> : <FiChevronUp />}
        text={""}
        onClick={openAdminTabPanel}
      />
      <TabButton
        className={adminTab === 2 ? "tab2" : "tab2-close"}
        Icon={<AiOutlinePlus />}
        text={"Ajouter un produit"}
        onClick={() => selectTab(2)}
      />
      <TabButton
        className={adminTab === 3 ? "tab3" : "tab3-close"}
        Icon={<MdModeEditOutline />}
        text={"Modifier un produit"}
        onClick={() => selectTab(3)}
      />
    </TabsStyled>
  );
}
const TabsStyled = styled.div`
  display: grid;
  grid-gap: 1px;
  grid-template-columns: repeat(18, 1fr);
  height: 44px;
  box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);

  .tab1 {
    grid-column-start: 2;
    grid-column-end: 3;
    justify-content: center;
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
  }
  .tab1-close {
    grid-column-start: 2;
    grid-column-end: 3;
    justify-content: center;
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
