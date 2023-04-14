import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

export const getInputsConfig = (newProductInfo) => [
  {
    id: "1",
    name: "title",
    placeholder: "Nom du produit (ex:Super Burger)",
    Icon: <FaHamburger />,
    type: "text",
    value: newProductInfo.title,
  },
  {
    id: "2",
    name: "imageSource",
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    Icon: <BsFillCameraFill />,
    type: "url",
    value: newProductInfo.imageSource,
  },
  {
    name: "price",
    id: "3",
    placeholder: "Prix",
    Icon: <MdOutlineEuro />,
    type: "text",
    value: newProductInfo.price ? newProductInfo.price : "",
  },
];
