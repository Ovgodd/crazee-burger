import { createContext } from "react";

export default createContext({
  isCollapsed: false,
  setIsCollapsed: () => {},
  isAdmin: false,
  setIsAdmin: () => {},
  selectedTab: "add",
  setSelectedTab: () => {},
  cardSelected: false,
  setCardSelected: () => {},
  fakeMenus: {},
  handleAdd: () => {},
  handleDelete: () => {},
  handleReset: () => {},
});
