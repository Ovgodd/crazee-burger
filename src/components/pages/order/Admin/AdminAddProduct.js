import React, { useContext } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext";
import SecondaryAddButton from "../../../reusable-ui/SecondaryAddButton";

export default function AdminAddProduct({ onClick }) {
  const { isProductAdd } = useContext(OrderContext);
  return (
    <AdminAddProductStyled>
      <SecondaryAddButton
        className={"add-new-product"}
        label={"Ajouter un nouveau produit au menu"}
        onClick={onClick}
      />
      {isProductAdd ? (
        <div className="success-span">
          <AiOutlineCheckCircle className="icon" />
          <span>Ajouté avec succès !</span>
        </div>
      ) : (
        ""
      )}
    </AdminAddProductStyled>
  );
}
const AdminAddProductStyled = styled.div`
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
    right: 75px;
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
