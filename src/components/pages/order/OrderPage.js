import React, { useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import NavBar from "./Navbar/NavBar";
import { useRef } from "react";

export default function OrderPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedTab, setSelectedTab] = useState("add");
  const [menuProducts, setMenuProducts] = useState(fakeMenu.MEDIUM);
  const [isCardSelected, setIsCardSelected] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const DEFAULT_PRODUCT_INFO = {
    id: "",
    imageSource: "",
    title: "",
    price: 0,
  };
  const [productInfo, setProductInfo] = useState(DEFAULT_PRODUCT_INFO);

  const inputRef = useRef();

  const handleRef = () => {
    inputRef.current.focus();
  };

  const handleDelete = (id) => {
    const updatedMenu = menuProducts.filter((menu) => {
      return menu.id !== id;
    });
    setMenuProducts(updatedMenu);
    setSelectedTab("edit");
  };

  const handleAdd = (productToAdd) => {
    const menuCopy = [...menuProducts];
    const updatedMenu = [productToAdd, ...menuCopy];

    setMenuProducts(updatedMenu);
  };

  const handleReset = () => {
    setMenuProducts(fakeMenu.MEDIUM);
    setIsCardSelected(false);
  };

  const handleEdit = (id, updatedProductInfo) => {
    const updatedProduct = menuProducts.map((product) => {
      if (product.id === id) {
        return { ...product, ...updatedProductInfo };
      }
      return product;
    });
    setMenuProducts(updatedProduct);
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
    productInfo,
    setProductInfo,
    DEFAULT_PRODUCT_INFO,
    menuProducts,
    handleAdd,
    handleDelete,
    handleReset,
    handleEdit,
    handleRef,
    inputRef,
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
