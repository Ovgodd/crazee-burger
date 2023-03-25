import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddForm from "./AdminPanel/AddForm";

export const getTabsConfig = () => [
  {
    id: 1,
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    panel: <AddForm />,
  },
  {
    id: 2,
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
  },
];

export const getTabSelected = (tabs, selectedTab) =>
  tabs.find((tab) => tab.index === selectedTab);
