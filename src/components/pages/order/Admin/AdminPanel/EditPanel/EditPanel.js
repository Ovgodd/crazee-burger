import React, { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import AdminForm from "../AdminForm";
import EditText from "./EditText";

export default function EditPanel() {
  const { selectedProduct } = useContext(OrderContext);

  return <div>{!selectedProduct ? <EditText /> : <AdminForm />}</div>;
}
