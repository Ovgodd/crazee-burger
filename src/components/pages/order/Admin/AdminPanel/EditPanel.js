import React, { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../../context/OrderContext";
import AddForm from "./AddForm";
import EditText from "./EditText";

export default function EditPanel() {
  const { isCardSelected } = useContext(OrderContext);

  return (
    <EditPanelStyled>
      {isCardSelected ? <AddForm /> : <EditText />}
    </EditPanelStyled>
  );
}
const EditPanelStyled = styled.div``;
