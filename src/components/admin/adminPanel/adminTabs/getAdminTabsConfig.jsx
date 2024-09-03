import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export const getAdminTabsConfig = (selectedTab) => [
    {
        key: "addProduct",
        icon: <AiOutlinePlus />,
        label: "Ajouter un produit",
        className: selectedTab === "addProduct" ? 'selected' : '',
    },
    {
        key: "editProduct",
        icon: <MdModeEditOutline />,
        label: "Modifier un produit",
        className: selectedTab === "editProduct" ? 'selected' : '',
    }
];