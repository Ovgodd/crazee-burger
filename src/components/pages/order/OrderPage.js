import React, { useState } from "react";
import styled from "styled-components";
import OrderContext from "../../../context/OrderContext";
import { fakeMenu } from "../../../fakeData/fakeMenu";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import NavBar from "./Navbar/NavBar";
import { useRef } from "react";
import { DEFAULT_PRODUCT_INFO } from "../../enums/product";

export default function OrderPage() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedTab, setSelectedTab] = useState("add");
  const [menuProducts, setMenuProducts] = useState(fakeMenu.MEDIUM);
  const [isCardSelected, setIsCardSelected] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [productInfo, setProductInfo] = useState(DEFAULT_PRODUCT_INFO);
  const [isProductAdded, setIsProductAdded] = useState(false);

  const inputRef = useRef();

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
    setProductInfo(DEFAULT_PRODUCT_INFO); //Delete if want to keep current adding product when reseting
  };

  const handleEdit = (productBeingEdited) => {
    const menuCopy = JSON.parse(JSON.stringify(menuProducts));

    const indexOfProductToEdit = menuProducts.findIndex(
      (product) => product.id === productBeingEdited.id
    );

    menuCopy[indexOfProductToEdit] = productBeingEdited;

    setMenuProducts(menuCopy);
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
    menuProducts,
    handleAdd,
    handleDelete,
    handleReset,
    handleEdit,
    inputRef,
    isProductAdded,
    setIsProductAdded,
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
