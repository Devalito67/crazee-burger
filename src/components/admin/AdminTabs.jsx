import styled from "styled-components";
import Tab from "./Tab";
import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MdModeEditOutline } from "react-icons/md";

export default function AdminTabs({isCollapsed, setIsCollapsed}) {

const handleAdminClick = () => {
    setIsCollapsed(prev => !prev)
}
 
    return <AdminTabsStyled>
        <Tab icon={isCollapsed ? <FiChevronDown/> : <FiChevronUp/>}  onClick={handleAdminClick} />
        {/* <Tab icon={<AiOutlinePlus/>} text="Ajouter un produit" onClick={handleAdminAddProductClick}/>
        <Tab icon={<MdModeEditOutline/>} text="Modifier un produit" onClick={handleAdminEditProductClick}/> */}
    </AdminTabsStyled>
}

const AdminTabsStyled = styled.div`
  display: flex;
  height: 44px;
 border: 2px solid red;
`;
