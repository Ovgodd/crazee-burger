import React, { useContext } from "react";
import AdminForm from "../../../../reusable-ui/AdminForm";
import OrderContext from "../../../../../context/OrderContext";

export default function EditForm() {
  const {
    handleEdit,
    setNewProductInfo,
    newProductInfo,
    inputRef,
    selectedProduct,
  } = useContext(OrderContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatednewProductInfo = { ...newProductInfo, [name]: value };
    setNewProductInfo(updatednewProductInfo);
    handleEdit(updatednewProductInfo);
  };

  return (
    <div>
      <AdminForm
        product={newProductInfo}
        inputRef={inputRef}
        selectedProduct={selectedProduct}
        onChange={handleChange}
      />
    </div>
  );
}
