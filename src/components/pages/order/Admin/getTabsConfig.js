import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AdminForm from "./AdminPanel/AdminForm";
import EditPanel from "./AdminPanel/EditPanel";

export const getTabsConfig = () => [
  {
    id: 1,
    index: "add",
    label: "Ajouter un produit",
    Icon: <AiOutlinePlus />,
    Panel: <AdminForm />,
  },
  {
    id: 2,
    index: "edit",
    label: "Modifier un produit",
    Icon: <MdModeEditOutline />,
    Panel: <EditPanel />,
  },
];

export const getTabSelected = (tabs, selectedTab) =>
  tabs.find((tab) => tab.index === selectedTab);
