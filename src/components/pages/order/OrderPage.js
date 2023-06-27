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
import { getMenu } from "../../../api/product";
import { getLocalStorage } from "../../../utils/Window";

export default function OrderPage() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedTab, setSelectedTab] = useState("edit");
  const [newProductInfo, setNewProductInfo] = useState(DEFAULT_PRODUCT_INFO);
  const [selectedProduct, setSelectedProduct] = useState(DEFAULT_PRODUCT_INFO);
  const [isCardSelected, setIsCardSelected] = useState(false);
  const inputRef = useRef();
  const { username } = useParams();

  const {
    handleAdd,
    handleReset,
    handleEdit,
    handleDelete,
    menuProducts,
    setMenuProducts,
  } = useMenu();
  const { basket, setBasket, handleAddToBasket, handleDeleteToBasket } =
    useBasket();

  const initialiseMenu = async () => {
    const menuReceived = await getMenu(username);
    console.log("menuReceived", menuReceived);
    setMenuProducts(menuReceived);
  };

  const initialiseBasket = () => {
    const basketReceived = getLocalStorage(username);
    console.log("basketReceived", basketReceived);
    if (basketReceived) setBasket(basketReceived);
  };

  useEffect(() => {
    initialiseMenu();
  }, []);

  useEffect(() => {
    initialiseBasket();
  }, []);

  const handleProductClick = async (idProductCliked) => {
    const productClickedOn = findObjectById(idProductCliked, menuProducts);
    await setSelectedProduct(productClickedOn);
    await setSelectedTab("edit");
    await setIsCollapsed(false);
    inputRef.current.focus();
    console.log("products clicked on : ", selectedProduct); // OK
  };

  const adminContextValue = {
    username,
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
