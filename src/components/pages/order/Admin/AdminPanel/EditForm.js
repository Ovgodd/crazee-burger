import React, { useContext } from "react";
import AdminForm from "../../../../reusable-ui/AdminForm";
import OrderContext from "../../../../../context/OrderContext";

export default function EditForm() {
  const { handleEdit, setProductInfo, productInfo, inputRef, selectedProduct } =
    useContext(OrderContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedProductInfo = { ...productInfo, [name]: value };
    setProductInfo(updatedProductInfo);
    handleEdit(productInfo.id, { [name]: value });
  };

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
