import React, { useContext } from "react";
import AdminForm from "../../../../reusable-ui/AdminForm";
import OrderContext from "../../../../../context/OrderContext";

export default function EditForm() {
  const { handleChange, productInfo, inputRef, selectedProduct } =
    useContext(OrderContext);
  return (
    <div>
      <AdminForm
        product={productInfo}
        inputRef={inputRef}
        selectedProduct={selectedProduct}
        onChange={handleChange}
      />
    </div>
  );
}
