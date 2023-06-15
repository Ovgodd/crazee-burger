import React, { useEffect, useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../context/OrderContext";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import NavBar from "./Navbar/NavBar";
import { useRef } from "react";
import { DEFAULT_PRODUCT_INFO } from "../../enums/product";
import { useMenu } from "../../../hooks/useMenu";
import { useBasket } from "../../../hooks/useBasket";
import { findObjectById } from "../../../utils/array";
import { useParams } from "react-router-dom";

export default function OrderPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedTab, setSelectedTab] = useState("add");
  const [newProductInfo, setNewProductInfo] = useState(DEFAULT_PRODUCT_INFO);
  const [selectedProduct, setSelectedProduct] = useState(DEFAULT_PRODUCT_INFO);
  const [isCardSelected, setIsCardSelected] = useState(false);
  const inputRef = useRef();
  const {
    handleAdd,
    handleReset,
    handleEdit,
    handleDelete,
    menuProducts,
    setMenuProducts,
    loadMenuProducts,
  } = useMenu();
  const { basket, setBasket, handleAddToBasket, handleDeleteToBasket } =
    useBasket();

  const userName = useParams();
  const [userValue, setUserValue] = useState(userName);

  const handleProductClick = async (idProductCliked) => {
    const productClickedOn = findObjectById(idProductCliked, menuProducts);
    await setSelectedProduct(productClickedOn);
    await setSelectedTab("edit");
    await setIsCollapsed(false);
    inputRef.current.focus();
    console.log("products clicked on : ", selectedProduct); // OK
  };

  const adminContextValue = {
    isCollapsed,
    setIsCollapsed,
    isAdmin,
    setIsAdmin,
    selectedTab,
    setSelectedTab,
    isCardSelected,
    setIsCardSelected,
    selectedProduct,
    setSelectedProduct,
    newProductInfo,
    setNewProductInfo,
    menuProducts,
    setMenuProducts,

    handleAdd,
    handleDelete,
    handleReset,
    handleEdit,
    inputRef,
    basket,
    setBasket,
    handleAddToBasket,
    handleDeleteToBasket,
    handleProductClick,
    loadMenuProducts,
    userValue,
    setUserValue,
  };

  return (
    <OrderPageStyled>
      <OrderContext.Provider value={adminContextValue}>
        <div className="container">
          <NavBar />
          <Main />
        </div>
      </OrderContext.Provider>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${theme.colors.primary};

  .container {
    height: 95vh;
    max-width: 1400px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
