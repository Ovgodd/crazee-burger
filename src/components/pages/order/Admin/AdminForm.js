import styled from "styled-components";
import { useContext, useState } from "react";
import OrderContext from "../../../../context/OrderContext";
import Input from "../../../reusable-ui/Input";
import { getInputConfig } from "./getInputConfig";
import comingSoon from "../../../../images/coming-soon.png";
import SecondaryAddButton from "../../../reusable-ui/SecondaryAddButton";
import { theme } from "../../../../theme";
export default function AdminForm() {
  const { fakeMenus, setFakeMenus } = useContext(OrderContext);
  const [productInfo, setProductInfo] = useState({
    id: "",
    imageSource: "",
    title: "",
    price: "",
  });
  const [imageUrl, setImageUrl] = useState();

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
    setProductInfo({ id: "", imageSource: "", title: "", price: "" });
  };

  const inputs = getInputConfig();

  return (
    <AdminFormStyled onSubmit={handleSubmit}>
      <div className="image-container">
        {imageUrl ? (
          <img src={imageUrl} alt="images" />
        ) : (
          <span>Aucune Image</span>
        )}
      </div>
      <div className="input-container">
        {inputs.map((input) => (
          <Input
            key={input.id}
            type={input.type}
            Icon={input.Icon}
            label={input.label}
            name={input.name}
            onChange={handleInputChange}
          />
        ))}
      </div>

      <SecondaryAddButton
        className={"add-new-product"}
        label={"Ajouter un nouveau produit au menu"}
      />
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
  .input-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width: 645px;
    height: 121px;
    margin-left: 20px;
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
  .add-new-product {
    padding: 10px 29px 9px 29px;
    position: absolute;
    background: #60bd4f;
    border: 1px solid #60bd4f;
    border-radius: 5px;
    width: 275px;
    height: 34px;
    bottom: 0;
    font-size: 12px;
    font-family: "Arial";
    font-style: normal;
    font-weight: 700;
    left: 235px;
    &:hover {
      background-color: ${theme.colors.white};
      border-color: ${theme.colors.success};
      color: ${theme.colors.success};
      border: 1px solid;
      transition: 0.3s;
      cursor: pointer;
    }
    &:active {
      background-color: ${theme.colors.primary};
      border-color: ${theme.colors.white};
      color: ${theme.colors.white};
      transition: 0.3s;

      cursor: pointer;
    }
  }
`;
