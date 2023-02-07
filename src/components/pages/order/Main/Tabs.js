import React, { useContext, useState } from "react";
import styled from "styled-components";
import TabButton from "../../../reusable-ui/TabButton";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../theme";
import AdminContext from "../../../../context/AdminContext";
export default function Tabs() {
  const toggleAdmin = useContext(AdminContext);

  return (
    <TabsStyled>
      <TabButton Icon=<FiChevronDown /> className={"tab1"} text={""} />
      <TabButton
        className={"tab2"}
        Icon={<AiOutlinePlus />}
        text={"Ajouter un produit"}
      />
      <TabButton
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
    color: ${theme.colors.greySemiDark};
  }
  .tab3 {
    grid-column-start: 6;
    grid-column-end: 9;
  }
`;
