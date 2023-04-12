import React, { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import EditText from "./EditText";
import EditForm from "../EditForm";

export default function EditPanel() {
  const { selectedProduct } = useContext(OrderContext);

  return <div>{selectedProduct ? <EditForm /> : <EditText />}</div>;
}
