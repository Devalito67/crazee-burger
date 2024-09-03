import { BsFillCameraFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { MdOutlineEuro } from "react-icons/md";

export const getAdminInputsConfig = [
    {
      key: "titleInput",
      name: "title",
      Icon: <FaHamburger />,
      placeholder: "Ajouter un produit",
    },
    {
      key: "imageInput",
      name: "imageSource",
      Icon: <BsFillCameraFill />,
      placeholder: "Ajouter un produit",
    },
    {
      key: "priceInput",
      name: "price",
      Icon: <MdOutlineEuro />,
      placeholder: "Price",
    }
  ];