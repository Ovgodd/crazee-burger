import React from "react";
import styled from "styled-components";
import AdminInputs from "./AdminInputs";

export default function AdminForm() {
  return (
    <AdminFormStyled className="form-container">
      <div className="image-container">
        {/* <img src="" alt="image" /> */}
        <span>Aucune image</span>
      </div>
      <AdminInputs />
    </AdminFormStyled>
  );
}
const AdminFormStyled = styled.div`
  position: relative;
  display: flex;
  top: 31px;
  left: 71px;
  height: 160px;
  width: 880px;
  background: red;

  .image-container {
    height: 120px;
    width: 215px;
    left: 0px;
    top: -1px;
    border-radius: 5px;
    border: 1px solid #e4e5e9;
    padding: 48px, 55px, 48px, 54px;
    background: yellow;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
