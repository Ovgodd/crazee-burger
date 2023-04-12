import React from "react";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import AdminForm from "../../../../reusable-ui/AdminForm";

export default function AddForm() {
  const {
    productInfo,
    selectedProduct,
    inputRef,
    handleChange,
    handleSubmit,
    isProductAdded,
  } = useContext(OrderContext);

  return (
    <div>
      <AdminForm
        product={productInfo}
        inputRef={inputRef}
        selectedProduct={selectedProduct}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isProductAdded={isProductAdded}
      />
    </div>
  );
}
