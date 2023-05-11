import React, { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import Form from "../../../../reusable-ui/Form";
import EditInfoMessage from "./EditInfoMessage";

export default function ProductEditForm() {
  const {
    newProductInfo,
    selectedProduct,
    inputRef,
    isProductAdded,
    setSelectedProduct,

    handleEdit,
  } = useContext(OrderContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const productBeingUpdated = { ...selectedProduct, [name]: value };
    setSelectedProduct(productBeingUpdated);
    console.log("productBeingUpdated", selectedProduct);

    handleEdit(productBeingUpdated, event);
  };
  return (
    <Form
      product={selectedProduct}
      inputRef={inputRef}
      onChange={handleChange}
      isProductAdded={isProductAdded}
    >
      <EditInfoMessage />
    </Form>
  );
}
