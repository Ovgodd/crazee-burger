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
  fakeMenus: {},
  inputRef: null,
  handleRef: () => {},
  handleAdd: () => {},
  handleDelete: () => {},
  handleReset: () => {},
  handleEdit: () => {},
});
