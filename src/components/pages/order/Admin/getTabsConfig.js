import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import ProductAddForm from "./AdminPanel/ProductAddForm";
import ProductEditForm from "./AdminPanel/ProductEditForm";
import HintMessage from "./AdminPanel/EditPanel/HintMessage";

export const getTabsConfig = (hasAlreadyBeenClicked) => [
  {
    id: "1",
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    Panel: <ProductAddForm />,
  },
  {
    id: "2",
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    Panel: hasAlreadyBeenClicked ? <ProductEditForm /> : <HintMessage />,
  },
];

export const getTabSelected = (tabs, selectedTab) => {
  return tabs.find((tab) => tab.index === selectedTab);
};
