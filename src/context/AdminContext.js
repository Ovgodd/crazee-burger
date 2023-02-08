import { createContext } from "react";

export default createContext({
  //panel admin est ouvert ?
  isToggle: false,
  setIsToggle: () => {},

  //pas sur de l'utilitée
  toggleAdminTabPanel: () => {},

  //bouton admin enclenché ?
  isAdmin: false,
  setIsAdmin: () => {},

  //tab choisie
  adminTab: 2,
  setAdminTab: () => {},
});
