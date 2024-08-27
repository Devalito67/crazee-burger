import styled from "styled-components";
import AdminPanel from "./AdminPanel";
import AdminTabs from "./AdminTabs";
import { useState } from "react";

export default function Admin() {
    const [isCollapsed, setIsCollapsed] = useState(true)

    return <AdminStyled>
        <AdminTabs isCollapsed= {isCollapsed} setIsCollapsed={setIsCollapsed} />
        {isCollapsed && <AdminPanel />}
    </AdminStyled>
}

const AdminStyled = styled.div`
display: flex;
flex-direction: column;
border: 2px solid blue;
`;