/* eslint-disable react/prop-types */
import styled from "styled-components";
import Tab from "./Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useContext } from "react";
import OrderPageContext from "../../../../context/OrderPageContext";
import { getAdminTabsConfig } from "./getAdminTabsConfig";

export default function AdminTabs() {
    const { isCollapsed, setIsCollapsed, selectedTab, setSelectedTab } = useContext(OrderPageContext)
    const tabs = getAdminTabsConfig(selectedTab)
    
    const handleCollapseTabClick = () => {
        setIsCollapsed(prev => !prev);
    };

    const handleAdminTabClick = (keyTab) => {
        setSelectedTab(keyTab);
        setIsCollapsed(false)
    };

    return <AdminTabsStyled>
        <Tab
            key="collapse"
            icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
            onClick={handleCollapseTabClick}
            className={isCollapsed ? "collapsed" : ""}
        />
        {tabs.map((tab) => (
            <Tab
                key={tab.key}
                icon={tab.icon}
                label={tab.label}
                onClick={() => handleAdminTabClick(tab.key)}
                className={tab.className}
            />
        ))}
    </AdminTabsStyled>
}

const AdminTabsStyled = styled.div`
  display: flex;
  height: 44px;
  column-gap:1px;
  padding-left: 71px;
`;
