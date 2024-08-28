/* eslint-disable react/prop-types */
import styled from "styled-components";
import Tab from "./Tab";
import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";



export default function AdminTabs({ isCollapsed, setIsCollapsed, selectedTab, setSelectedTab }) {


    const handleAdminClick = () => {
        setIsCollapsed(prev => !prev);
    };

    const handleAdminAddProductClick = () => {
        setSelectedTab("addProduct");
        setIsCollapsed(true)
    };

    const handleAdminEditProductClick = () => {
        setSelectedTab("editProduct");
        setIsCollapsed(true)

    };

    const adminTabsConfig = [
        {
            key: "collapse",
            icon: isCollapsed ? <FiChevronDown /> : <FiChevronUp />,
            text: null,
            onClick: handleAdminClick,
        },
        {
            key: "addProduct",
            icon: <AiOutlinePlus />,
            text: "Ajouter un produit",
            onClick: handleAdminAddProductClick,
        },
        {
            key: "editProduct",
            icon: <MdModeEditOutline />,
            text: "Modifier un produit",
            onClick: handleAdminEditProductClick,
        }
    ];

    return <AdminTabsStyled>
        {adminTabsConfig.map((tab) => (
            <Tab
                key={tab.key}
                icon={tab.icon}
                text={tab.text}
                onClick={tab.onClick}
                isSelected={selectedTab === tab.key}
            />
        ))}
    </AdminTabsStyled>
}

const AdminTabsStyled = styled.div`
  display: flex;
  height: 44px;
 border: 2px solid red;
`;
