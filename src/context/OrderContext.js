import { createContext } from "react";

export default createContext({
  menuProducts: [],
  setMenuProducts: () => {},
  isCollapsed: false,
  setIsCollapsed: () => {},
  isAdmin: false,
  setIsAdmin: () => {},
  selectedTab: "add",
  setSelectedTab: () => {},
  isCardSelected: false,
  setIsCardSelected: () => {},
  selectedProduct: null,
  setSelectedProduct: () => {},
  newProductInfo: null,
  setNewProductInfo: () => {},
  fakeMenus: {},
  inputRef: () => {},
  handleRef: () => {},
  handleAdd: () => {},
  handleDelete: () => {},
  handleReset: () => {},
  handleEdit: () => {},
  basket: [],
  setBasket: () => {},
  handleAddToBasket: () => {},
  handleDeleteToBasket: () => {},
  handleProductClick: () => {},
  loadMenuProducts: () => {},
  userValue: "",
  setUserValue: () => {},
});
