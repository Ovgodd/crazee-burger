import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import OrderContext from "../../../../../context/OrderContext";
import AdminInputs from "./AdminInputs";
import ProductImage from "./ProductImage";
import { theme } from "../../../../../theme";
import Button from "../../../../reusable-ui/Buttons/Button";
import SubmitMessage from "./SubmitMessage";

export default function AddForm() {
  const { handleEdit, selectedProduct, isCardSelected, handleAdd } =
    useContext(OrderContext);

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
    } else {
      setProductInfo(DEFAULT_PRODUCT_INFO);
    }
  }, [isCardSelected, selectedProduct]);

  const addButton = (
    <Button variant="success" label="Ajouter un nouveau produit au menu" />
  );

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <ProductImage
        imageSource={productInfo.imageSource}
        title={productInfo.title}
      />
      <AdminInputs productInfo={productInfo} onChange={handleChange} />
      {!isCardSelected ? (
        addButton
      ) : (
        <span className="modify-text">
          Cliquer sur un produit du menu pour le modifier en temps réel
        </span>
      )}
      {isProductAdded && <SubmitMessage />}
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  position: relative;
  display: flex;
  top: 31px;
  left: 71px;
  height: 164px;
  width: 880px;
  .modify-text {
    color: ${theme.colors.greySemiDark};
    position: absolute;
    bottom: 10px;
    left: 235px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: ${theme.fonts.weights.regular};
    font-size: ${theme.fonts.size.SM};
    line-height: 20px;
    display: flex;
    align-items: center;
    color: ${theme.colors.primary};
  }
`;
