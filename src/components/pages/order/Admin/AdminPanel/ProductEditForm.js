import React, { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import Form from "../../../../reusable-ui/Form";
import HintMessage from "./EditPanel/HintMessage";
import EditInfoMessage from "./EditInfoMessage";

export default function ProductEditForm() {
  const {
    newProductInfo,
    selectedProduct,
    inputRef,
    isProductAdded,
    setNewProductInfo,
    handleEdit,
  } = useContext(OrderContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedNewProductInfo = { ...newProductInfo, [name]: value };

    setNewProductInfo(updatedNewProductInfo);

    handleEdit(updatedNewProductInfo);
  };
  return (
    <Form
      product={newProductInfo}
      inputRef={inputRef}
      selectedProduct={selectedProduct}
      onChange={handleChange}
      isProductAdded={isProductAdded}
    >
      <EditInfoMessage />
    </Form>
  );
}
