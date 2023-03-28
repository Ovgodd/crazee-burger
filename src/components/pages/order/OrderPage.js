import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import NavBar from "./Navbar/NavBar";

export default function OrderPage() {
  const [isCollapsed, setisCollapsed] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedTab, setselectedTab] = useState("add");
  const [menuProducts, setMenuProducts] = useState(fakeMenu.MEDIUM);
  const [isProductAdded, setIsProductAdded] = useState(false);

  const { username } = useParams();

  const handleDelete = (id) => {
    const updatedMenu = menuProducts.filter((menu) => {
      return menu.id !== id;
    });
    setMenuProducts(updatedMenu);
  };

  const handleAdd = (productToAdd) => {
    const menuCopy = [...menuProducts];

    const updatedMenu = [productToAdd, ...menuCopy];

    setMenuProducts(updatedMenu);
  };

  const handleReset = () => {
    setMenuProducts(fakeMenu.MEDIUM);
  };

  const adminContextValue = {
    isCollapsed,
    setisCollapsed,
    isAdmin,
    setIsAdmin,
    selectedTab,
    setselectedTab,
    menuProducts,
    isProductAdded,
    setIsProductAdded,
    handleAdd,
    handleDelete,
    handleReset,
  };

  return (
    <OrderPageStyled>
      <OrderContext.Provider value={adminContextValue}>
        <div className="container">
          <NavBar username={username} />
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
