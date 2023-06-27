import { getMenu } from "../../../../api/product";
import { getLocalStorage } from "../../../../utils/Window";

const initialiseMenu = async (username, setMenuProducts) => {
  const menuReceived = await getMenu(username);
  setMenuProducts(menuReceived);
};

const initialiseBasket = (username, setBasket) => {
  const basketReceived = getLocalStorage(username);
  if (basketReceived) setBasket(basketReceived);
};

export const initialiseUserSession = async (
  username,
  setMenuProducts,
  setBasket
) => {
  await initialiseMenu(username, setMenuProducts);
  initialiseBasket(username, setBasket);
};
