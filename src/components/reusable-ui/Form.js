import styled from "styled-components";
import AdminInputs from "../pages/order/Admin/AdminPanel/AdminInputs";
import ProductImage from "../pages/order/Admin/AdminPanel/ProductImage";

export default function Form({
  onSubmit,
  onChange,
  product,
  inputRef,
  children,
}) {
  return (
    <FormStyled onSubmit={onSubmit}>
      <ProductImage imageSource={product.imageSource} title={product.title} />
      <AdminInputs
        ref={inputRef}
        newProductInfo={product}
        onChange={onChange}
      />
      <div className="form-footer">{children}</div>
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
  .form-footer {
    position: absolute;
    top: 145px;
    left: -55px;
  }
`;
