import { createContext } from "react";

export default createContext({
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
  isPageRefresh: false,
  setIsPageRefresh: () => {},
});
