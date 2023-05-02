import React, { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { DEFAULT_PRODUCT_INFO } from "../../../../enums/product";
import AdminForm from "../../../../reusable-ui/AdminForm";

export default function ProductAddForm() {
  const {
    newProductInfo,
    selectedProduct,
    inputRef,
    isProductAdded,
    handleAdd,
    setNewProductInfo,
    setIsProductAdded,
  } = useContext(OrderContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedNewProductInfo = { ...newProductInfo, [name]: value };
    setNewProductInfo(updatedNewProductInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAdd({ ...newProductInfo, id: new Date().getTime() });
    setNewProductInfo(DEFAULT_PRODUCT_INFO); // reset form
    displaySuccess();
  };

  const displaySuccess = () => {
    setIsProductAdded(true);
    setTimeout(() => {
      setIsProductAdded(false);
    }, 2000);
  };
  return (
    <AdminForm
      product={newProductInfo}
      inputRef={inputRef}
      selectedProduct={selectedProduct}
      onChange={handleChange}
      onSubmit={handleSubmit}
      isProductAdded={isProductAdded}
    />
  );
}