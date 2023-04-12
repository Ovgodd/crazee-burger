import styled from "styled-components";
import AdminInputs from "../pages/order/Admin/AdminPanel/AdminInputs";
import ProductImage from "../pages/order/Admin/AdminPanel/ProductImage";
import FormFooter from "../pages/order/Admin/AdminPanel/FormFooter";

export default function AdminForm({
  onSubmit,
  onChange,
  product,
  inputRef,
  isProductAdded,
  selectedProduct,
}) {
  return (
    <AdminFormStyled onSubmit={onSubmit}>
      <ProductImage imageSource={product.imageSource} title={product.title} />
      <label htmlFor={product.name}></label>
      <AdminInputs ref={inputRef} productInfo={product} onChange={onChange} />
      <FormFooter
        onSubmit={onSubmit}
        isProductAdded={isProductAdded}
        onEdit={selectedProduct}
      />
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
