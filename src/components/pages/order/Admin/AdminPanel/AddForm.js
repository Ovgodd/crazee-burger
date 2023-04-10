import React from "react";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { useState } from "react";
import AdminForm from "../../../../reusable-ui/AdminForm";
import styled from "styled-components";
//A DIVISER EVENTUELLEMENT AVEC UN EDIT OU LE RENOMMER
export default function AddForm() {
  const {
    setProductInfo,
    productInfo,
    handleEdit,
    DEFAULT_PRODUCT_INFO,
    isCardSelected,
    selectedProduct,
    handleAdd,
    inputRef,
  } = useContext(OrderContext);

  const [isProductAdded, setIsProductAdded] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedProductInfo = { ...productInfo, [name]: value };
    setProductInfo(updatedProductInfo);

    if (isCardSelected) {
      handleEdit(productInfo.id, { [name]: value });
    }
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
  console.log(productInfo + "add form");

  return (
    <AddFormStyled>
      <AdminForm
        product={productInfo}
        inputRef={inputRef}
        selectedProduct={selectedProduct}
        onChange={handleChange}
        onSubmit={handleSubmit}
        isProductAdded={isProductAdded}
      />
    </AddFormStyled>
  );
}
const AddFormStyled = styled.div``;
