import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
export const getInputConfig = () => [
  {
    id: 1,
    label: "Nom du produit(ex:Super Burger)",
    Icon: <FaHamburger />,
  },
  {
    id: 2,
    label: "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    Icon: <BsFillCameraFill />,
  },
  {
    id: 3,
    label: "Prix",
    Icon: <MdOutlineEuro />,
  },
];
