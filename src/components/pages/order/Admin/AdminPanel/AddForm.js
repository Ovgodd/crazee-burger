import React from "react";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import AdminForm from "../../../../reusable-ui/AdminForm";

export default function AddForm() {
  const {
    productInfo,
    selectedProduct,
    inputRef,
    isProductAdded,
    handleAdd,
    setProductInfo,
    DEFAULT_PRODUCT_INFO,
    setIsProductAdded,
  } = useContext(OrderContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedProductInfo = { ...productInfo, [name]: value };
    setProductInfo(updatedProductInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAdd({ ...productInfo, id: new Date().getTime() });
    setProductInfo(DEFAULT_PRODUCT_INFO); // reset form
    displaySuccess();
  };

  const displaySuccess = () => {
    setIsProductAdded(true);
    setTimeout(() => {
      setIsProductAdded(false);
    }, 2000);
  };
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
