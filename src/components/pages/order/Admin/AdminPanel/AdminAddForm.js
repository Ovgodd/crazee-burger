import styled from "styled-components";
import { useContext, useState } from "react";
import OrderContext from "../../../../../context/OrderContext";
import comingSoon from "../../../../../images/coming-soon.png";
import SubmitMessage from "./SubmitMessage";
import AdminInputs from "./AdminInputs";
import AdminProductImage from "./AdminProductImage";
import { theme } from "../../../../../theme";
export default function AdminAddForm() {
  const { fakeMenus, setFakeMenus, setIsProductAdd, isProductAdd } =
    useContext(OrderContext);

  const DEFAULT_PRODUCT_INFO = {
    id: "",
    imageSource: "",
    title: "",
    price: 0,
  };

  const [productInfo, setProductInfo] = useState(DEFAULT_PRODUCT_INFO);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductInfo({ ...productInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      id: new Date().getTime(),
      imageSource:
        productInfo.imageSource === "" ? comingSoon : productInfo.imageSource,
      title: productInfo.title,
      price: productInfo.price,
    };
    setFakeMenus([newProduct, ...fakeMenus]);
    setProductInfo(DEFAULT_PRODUCT_INFO);
  };

  const displaySuccess = () => {
    setIsProductAdd(true);
    setTimeout(() => {
      setIsProductAdd(false);
    }, 2000);
  };

  return (
    <AdminAddFormStyled onSubmit={handleSubmit}>
      <AdminProductImage productInfo={productInfo} />
      <AdminInputs productInfo={productInfo} onChange={handleInputChange} />
      <SubmitMessage onClick={displaySuccess} />
    </AdminAddFormStyled>
  );
}
const AdminAddFormStyled = styled.form`
  position: relative;
  display: flex;
  top: 31px;
  left: 71px;
  height: 160px;
  width: 880px;

  span {
    color: ${theme.colors.greySemiDark};
  }
`;
