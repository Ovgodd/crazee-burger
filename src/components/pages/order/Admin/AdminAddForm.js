import styled from "styled-components";
import { useContext, useState } from "react";
import OrderContext from "../../../../context/OrderContext";
import comingSoon from "../../../../images/coming-soon.png";
import AdminAddProduct from "./AdminAddProduct";
import AdminInputs from "./AdminInputs";
import AdminProductImage from "./AdminProductImage";
import { theme } from "../../../../theme";
export default function AdminAddForm() {
  const { fakeMenus, setFakeMenus, setIsProductAdd } = useContext(OrderContext);

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
      <AdminAddProduct onClick={displaySuccess} />
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

  .image-container {
    height: 120px;
    width: 215px;
    left: 0px;
    top: -1px;
    border-radius: ${theme.borderRadius.round};
    border: 1px solid ${theme.colors.greyLight};
    padding: 48px, 55px, 48px, 54px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      object-fit: contain;
      height: 100px;
      width: 100px;
    }
  }

  .success-span {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: ${theme.colors.success};
    position: absolute;
    bottom: 0px;
    width: 275px;
    height: 34px;
    right: 60px;
    .icon {
      width: 20px;
      height: 20px;
    }
    span {
      color: ${theme.colors.success};
      margin-left: ${theme.spacing.xxs};
      font-size: ${theme.fonts.size.SM};
    }
  }
`;
