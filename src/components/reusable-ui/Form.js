import styled from "styled-components";
import AdminInputs from "../pages/order/Admin/AdminPanel/AdminInputs";
import ProductImage from "../pages/order/Admin/AdminPanel/ProductImage";
import FormFooter from "../pages/order/Admin/AdminPanel/FormFooter";

export default function Form({
  onSubmit,
  onChange,
  product,
  inputRef,
  isSubmitted,
  selectedProduct,
}) {
  return (
    <FormStyled onSubmit={onSubmit}>
      <ProductImage imageSource={product.imageSource} title={product.title} />
      <AdminInputs
        ref={inputRef}
        newProductInfo={product}
        onChange={onChange}
      />
      <FormFooter
        onSubmit={!selectedProduct && onSubmit}
        isSubmitted={isSubmitted}
        onEdit={selectedProduct}
      />
    </FormStyled>
  );
}

const FormStyled = styled.form`
  position: relative;
  display: flex;
  top: 40px;
  left: 71px;
  height: 175px;
  width: 880px;
`;
