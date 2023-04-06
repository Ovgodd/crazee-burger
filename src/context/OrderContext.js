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
  fakeMenus: {},
  handleAdd: () => {},
  handleDelete: () => {},
  handleReset: () => {},
});
