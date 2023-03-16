import styled from "styled-components";
import { useContext, useState } from "react";
import OrderContext from "../../../../context/OrderContext";
import comingSoon from "../../../../images/coming-soon.png";
import { theme } from "../../../../theme";
import AdminAddProduct from "./AdminAddProduct";
import AdminInputs from "./AdminInputs";
export default function AdminForm() {
  const { fakeMenus, setFakeMenus, setIsProductAdd } = useContext(OrderContext);

  const [productInfo, setProductInfo] = useState({
    id: "",
    imageSource: "",
    title: "",
    price: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductInfo({ ...productInfo, [name]: value });
  };
  const handleImageInputChange = (event) => {
    setProductInfo({ ...productInfo, imageSource: event.target.value });
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
    setProductInfo({ id: "", imageSource: "", title: "", price: "" });
  };

  const displaySuccess = () => {
    setIsProductAdd(true);
    setTimeout(() => {
      setIsProductAdd(false);
    }, 2000);
  };

  return (
    <AdminFormStyled onSubmit={handleSubmit}>
      <div className="image-container">
        {productInfo.imageSource === "" ? (
          <span>Aucune Image</span>
        ) : (
          <img src={productInfo.imageSource} alt="images" />
        )}
      </div>
      <AdminInputs
        onChange={handleInputChange}
        onImageChange={handleImageInputChange}
      />
      <AdminAddProduct onClick={displaySuccess} />
    </AdminFormStyled>
  );
}
const AdminFormStyled = styled.form`
  position: relative;
  display: flex;
  top: 31px;
  left: 71px;
  height: 160px;
  width: 880px;

  span {
    color: #93a2b1;
  }

  .image-container {
    height: 120px;
    width: 215px;
    left: 0px;
    top: -1px;
    border-radius: 5px;
    border: 1px solid #e4e5e9;
    padding: 48px, 55px, 48px, 54px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .success-span {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: #60bd4f;
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
      color: #60bd4f;
      margin-left: 5px;
      font-size: 15px;
    }
  }
`;
