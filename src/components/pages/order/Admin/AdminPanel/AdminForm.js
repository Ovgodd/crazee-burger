import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import OrderContext from "../../../../../context/OrderContext";
import AdminInputs from "./AdminInputs";
import ProductImage from "./ProductImage";
import Button from "../../../../reusable-ui/Buttons/Button";
import SubmitMessage from "./SubmitMessage";
import ModifyMessage from "./ModifyMessage";

export default function AdminForm() {
  const {
    inputRef,
    handleRef,
    handleEdit,
    selectedProduct,
    isCardSelected,
    handleAdd,
  } = useContext(OrderContext);

  const DEFAULT_PRODUCT_INFO = {
    id: "",
    imageSource: "",
    title: "",
    price: 0,
  };

  const [productInfo, setProductInfo] = useState(DEFAULT_PRODUCT_INFO);
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

  useEffect(() => {
    if (isCardSelected) {
      setProductInfo(selectedProduct);
      handleRef();
    } else {
      setProductInfo(DEFAULT_PRODUCT_INFO);
    }
  }, [isCardSelected, selectedProduct]);

  const addButton = (
    <Button variant="success" label="Ajouter un nouveau produit au menu" />
  );

  const modifyMsg = <ModifyMessage />;

  return (
    <AdminFormStyled onSubmit={handleSubmit}>
      <ProductImage
        imageSource={productInfo.imageSource}
        title={productInfo.title}
      />
      <AdminInputs
        ref={inputRef}
        productInfo={productInfo}
        onChange={handleChange}
      />
      {!isCardSelected ? addButton : modifyMsg}
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
