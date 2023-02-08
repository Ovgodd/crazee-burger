import { createContext } from "react";

export default createContext({
  isToggle: false,
  setIsToggle: () => {},

  isAdmin: false,
  setIsAdmin: () => {},
});
