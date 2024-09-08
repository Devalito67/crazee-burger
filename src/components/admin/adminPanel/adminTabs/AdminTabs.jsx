/* eslint-disable react/prop-types */
import styled from "styled-components";
import Tab from "./Tab";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useContext } from "react";
import OrderPageContext from "../../../../context/OrderPageContext";
import { getAdminTabsConfig } from "./getAdminTabsConfig";

export default function AdminTabs() {
    const { isCollapsed, setIsCollapsed, selectedTab, setSelectedTab, inputTitleRef } = useContext(OrderPageContext)
    const tabs = getAdminTabsConfig(selectedTab)

    const handleCollapseTabClick = () => {
        setIsCollapsed(prev => !prev);
    };

    const handleAdminTabClick = async (keyTab) => {
        await setSelectedTab(keyTab);
        await setIsCollapsed(false);
        if (inputTitleRef.current) {
            inputTitleRef.current.focus();
          }
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
  width: max-content;
  height: 44px;
  column-gap:1px;
  padding-left: 71px;
`;
