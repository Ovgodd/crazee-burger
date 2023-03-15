import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
export const getInputConfig = () => [
  {
    id: 1,
    name: "title",
    label: "Nom du produit(ex:Super Burger)",
    Icon: <FaHamburger />,
    type: "text",
  },
  {
    id: 2,
    name: "imageSource",
    label: "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    Icon: <BsFillCameraFill />,
    type: "url",
  },
  {
    name: "price",
    id: 3,
    label: "Prix",
    Icon: <MdOutlineEuro />,
    type: "text",
  },
];
