import React, { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import AdminForm from "./AdminForm";
import EditText from "../../../../reusable-ui/EditText";

export default function EditPanel() {
  const { isCardSelected } = useContext(OrderContext);

  return <div>{isCardSelected ? <AdminForm /> : <EditText />}</div>;
}
