import React, { useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import NavBar from "./Navbar/NavBar";

export default function OrderPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedTab, setSelectedTab] = useState("add");
  const [menuProducts, setMenuProducts] = useState(fakeMenu.MEDIUM);
  const [isCardSelected, setIsCardSelected] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

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
    setIsCardSelected(null);
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
    menuProducts,
    handleAdd,
    handleDelete,
    handleReset,
    handleEdit,
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
