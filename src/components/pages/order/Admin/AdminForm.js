import styled from "styled-components";
import AdminInputs from "./AdminInputs";
import AdminAddProduct from "../../../reusable-ui/AdminAddProduct";
import { useState } from "react";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
export default function AdminForm() {
  const [menu, setMenu] = useState(fakeMenu2);

  const createProduct = (title, imageSource, price) => {
    const updatedProduct = [
      ...menu,
      { id: Math.round(Math.random() * 9999), title, imageSource, price },
    ];
    setMenu(updatedProduct);
    console.log("Product Created");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createProduct(menu);
    console.log("handleSubmit");
  };

  return (
    <AdminFormStyled onSubmit={handleSubmit}>
      <div className="image-container">
        <img src="" alt="images" />
        <span>Aucune image</span>
      </div>
      <AdminInputs />
      <AdminAddProduct />
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
    span {
      color: #93a2b1;
    }
  }
`;
