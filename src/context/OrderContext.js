import { createContext } from "react";

export default createContext({
  isCollapsed: false,
  setIsCollapsed: () => {},
  isAdmin: false,
  setIsAdmin: () => {},
  selectedTab: "add",
  setSelectedTab: () => {},
  fakeMenus: {},
  setFakeMenus: () => {},
  isProductAdd: false,
  setIsProductAdd: () => {},
});
