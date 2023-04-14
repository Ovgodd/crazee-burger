import React, { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import EditText from "./EditText";
import ProductForm from "../ProductForm";

export default function EditPanel() {
  const { selectedProduct } = useContext(OrderContext);

  return <div>{selectedProduct ? <ProductForm /> : <EditText />}</div>;
}
