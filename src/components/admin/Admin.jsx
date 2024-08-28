/* eslint-disable react/prop-types */
import styled from "styled-components";
import AdminPanel from "./AdminPanel";
import AdminTabs from "./AdminTabs";

export default function Admin({setSelectedTab, selectedTab, isCollapsed, setIsCollapsed }) {
    

    return <AdminStyled>
        <AdminTabs isCollapsed= {isCollapsed} setIsCollapsed={setIsCollapsed} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        {isCollapsed && <AdminPanel selectedTab={selectedTab}/>}
    </AdminStyled>
}

const AdminStyled = styled.div`
display: flex;
flex-direction: column;
border: 2px solid blue;
`;