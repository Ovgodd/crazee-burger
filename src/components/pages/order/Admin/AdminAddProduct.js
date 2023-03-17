import React, { useContext } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext";
import { theme } from "../../../../theme";
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
  .add-new-product {
    padding: 10px 29px 9px 29px;
    position: absolute;
    background: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
    border-radius: ${theme.borderRadius.round};
    width: 275px;
    height: 34px;
    bottom: 0;
    font-size: ${theme.fonts.size.XS};
    font-family: "Arial";
    font-style: normal;
    font-weight: ${theme.fonts.weights.bold};
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
      background-color: ${theme.colors.success};
      border-color: ${theme.colors.white};
      color: ${theme.colors.white};
      transition: 0.3s;

      cursor: pointer;
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
    right: 80px;
    .icon {
      width: 20px;
      height: 20px;
    }
    span {
      color: ${theme.colors.success};
      font-size: ${theme.fonts.size.SM};
      font-weight: ${theme.fonts.weights.regular};
      margin-left: 3px;
    }
  }
`;
