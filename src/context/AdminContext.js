import { createContext } from "react";

export default createContext({
  //panel admin
  isToggle: false,
  setIsToggle: () => {},

  //pas sur de l'utilitée
  toggleAdminTabPanel: () => {},

  //pour le bouton admin
  isAdmin: false,
  setIsAdmin: () => {},
});
