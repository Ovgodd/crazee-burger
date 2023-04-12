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
  productInfo: null,
  setProductInfo: () => {},
  DEFAULT_PRODUCT_INFO: null,
  fakeMenus: {},
  inputRef: () => {},
  handleRef: () => {},
  handleAdd: () => {},
  handleDelete: () => {},
  handleReset: () => {},
  handleEdit: () => {},
});
