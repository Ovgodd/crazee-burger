import React, { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { DEFAULT_PRODUCT_INFO } from "../../../../enums/product";
import Form from "../../../../reusable-ui/Form";
import { replaceFrenchCommaWithDot } from "../../../../../utils/maths";
import { useSuccessMessage } from "../../../../../hooks/useDisplaySuccess";
import SubmittButton from "./SubmittButton";

export default function ProductAddForm() {
  const {
    newProductInfo,
    selectedProduct,
    inputRef,
    handleAdd,
    setNewProductInfo,
  } = useContext(OrderContext);
  const { displaySuccess, isSubmitted } = useSuccessMessage();

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedNewProductInfo = { ...newProductInfo, [name]: value };

    setNewProductInfo(updatedNewProductInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAdd({
      ...newProductInfo,
      id: new Date().getTime(),
      price: replaceFrenchCommaWithDot(newProductInfo.price),
    });
    setNewProductInfo(DEFAULT_PRODUCT_INFO); // reset form
    displaySuccess();
  };

  return (
    <Form
      product={newProductInfo}
      inputRef={inputRef}
      selectedProduct={selectedProduct}
      onChange={handleChange}
      onSubmit={handleSubmit}
    >
      <SubmittButton isSubmitted={isSubmitted} />
    </Form>
  );
}
