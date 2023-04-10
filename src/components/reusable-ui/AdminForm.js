import styled from "styled-components";
import { useContext, useState } from "react";
import OrderContext from "../../context/OrderContext";
import AdminInputs from "../pages/order/Admin/AdminPanel/AdminInputs";
import ProductImage from "../pages/order/Admin/AdminPanel/ProductImage";
import Button from "./Buttons/Button";
import SubmitMessage from "../pages/order/Admin/AdminPanel/SubmitMessage";
import ModifyMessage from "../pages/order/Admin/AdminPanel/ModifyMessage";

export default function AdminForm({
  onSubmit,
  onChange,
  product,
  inputRef,
  selectedProduct,
  isProductAdded,
}) {
  const addButton = (
    <Button variant="success" label="Ajouter un nouveau produit au menu" />
  );

  const modifyMsg = <ModifyMessage />;

  console.log(product + " admin form");
  return (
    <AdminFormStyled onSubmit={onSubmit}>
      <ProductImage imageSource={product.imageSource} title={product.title} />
      <label htmlFor={product.name}></label>
      <AdminInputs ref={inputRef} productInfo={product} onChange={onChange} />
      {!selectedProduct ? addButton : modifyMsg}
      {isProductAdded && <SubmitMessage />}
    </AdminFormStyled>
  );
}

const AdminFormStyled = styled.form`
  position: relative;
  display: flex;
  top: 31px;
  left: 71px;
  height: 164px;
  width: 880px;
`;
