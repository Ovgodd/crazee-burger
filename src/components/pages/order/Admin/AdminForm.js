import styled from "styled-components";
import AdminInputs from "./AdminInputs";
import AdminAddProduct from "../../../reusable-ui/AdminAddProduct";
import { useState } from "react";
export default function AdminForm() {
  const [image, setImage] = useState();
  const [isImage, setisImage] = useState(false);

  const handleChange = (event) => {
    const userUrl = event.target.value;
    setImage(userUrl);
    console.log("handleChange");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");

    // updateProductImage(event);
  };

  return (
    <AdminFormStyled onSubmit={handleSubmit} onChange={handleChange}>
      <div className="image-container">
        {isImage ? <img src={image} alt="images" /> : <span>Aucune Image</span>}
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
