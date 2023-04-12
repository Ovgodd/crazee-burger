import React from "react";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import AdminForm from "../../../../reusable-ui/AdminForm";
import styled from "styled-components";
//A DIVISER EVENTUELLEMENT AVEC UN EDIT OU LE RENOMMER
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
