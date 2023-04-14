import React, { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import EditText from "./EditText";
import AddForm from "../ProductForm";

export default function EditPanel() {
  const { selectedProduct } = useContext(OrderContext);

  return <div>{selectedProduct ? <AddForm /> : <EditText />}</div>;
}
