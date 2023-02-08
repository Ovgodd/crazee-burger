import React, { useContext, useState } from "react";
import styled from "styled-components";
import TabButton from "../../../reusable-ui/TabButton";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../theme";
import AdminContext from "../../../../context/AdminContext";
import { tab } from "@testing-library/user-event/dist/tab";
export default function Tabs() {
  const { isToggle, setIsToggle } = useContext(AdminContext);

  const [toggleAdminTab, setToggleAdminTab] = useState(true);

  const [isAdminToggled, setIsAdminToggled] = useState(2);
  //création fonction who handle when set toggle or untoggle
  const toggleTab = (index) => {
    setToggleAdminTab(index);
    if (!isAdminToggled) setIsAdminToggled(true);
    console.log(index);
  };
  const toggleAdminTabPanel = () => {
    setIsAdminToggled(!isAdminToggled);
    console.log("opening panel");
  };
  return (
    <TabsStyled>
      <TabButton
        onClick={toggleAdminTabPanel}
        className={isToggle ? "tab1" : "tab1-close"}
        Icon={isToggle ? <FiChevronDown /> : <FiChevronUp />}
        text={""}
      />
      <TabButton
        onClick={() => toggleTab(2)}
        className={isToggle ? "tab2" : "tab2-close"}
        Icon={<AiOutlinePlus />}
        text={"Ajouter un produit"}
      />
      <TabButton
        onClick={() => toggleTab(3)}
        className={"tab3"}
        Icon={<MdModeEditOutline />}
        text={"Modifier un produit"}
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
  }
  .tab1-close {
    grid-column-start: 2;
    grid-column-end: 3;
    justify-content: center;
    background-color: black;
    color: ${theme.colors.white};
  }
  .tab2 {
    grid-column-start: 3;
    grid-column-end: 6;
    background-color: black;
    color: white;
  }
  .tab2-close {
    grid-column-start: 3;
    grid-column-end: 6;
    background-color: white;
    color: black;
  }
  .tab3 {
    grid-column-start: 6;
    grid-column-end: 9;
  }
  .tab3-close {
    grid-column-start: 6;
    grid-column-end: 9;
    background-color: white;
    color: black;
  }
`;
