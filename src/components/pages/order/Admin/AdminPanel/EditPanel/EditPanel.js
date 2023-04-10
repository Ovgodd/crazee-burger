import React, { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import AdminForm from "../AdminForm";
import EditText from "./EditText";

export default function EditPanel() {
  const { productInfo, DEFAULT_PRODUCT_INFO } = useContext(OrderContext);

  return (
    <div>
      {productInfo === DEFAULT_PRODUCT_INFO ? <EditText /> : <AdminForm />}
    </div>
  );
}
