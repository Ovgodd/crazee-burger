import React, { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import AdminForm from "../../../../reusable-ui/AdminForm";
import {
  formatPrice,
  replaceFrenchCommaWithDot,
} from "../../../../../utils/maths";

export default function ProductEditForm() {
  const {
    newProductInfo,
    selectedProduct,
    inputRef,
    isProductAdded,
    setNewProductInfo,
    handleEdit,
  } = useContext(OrderContext);

  const handleChange = (event, productBeingEdited) => {
    const { name, value } = event.target;
    const updatedNewProductInfo = { ...newProductInfo, [name]: value };

    setNewProductInfo(updatedNewProductInfo);

    handleEdit(updatedNewProductInfo);
  };
  return (
    <AdminForm
      product={newProductInfo}
      inputRef={inputRef}
      selectedProduct={selectedProduct}
      onChange={handleChange}
      isProductAdded={isProductAdded}
    />
  );
}
