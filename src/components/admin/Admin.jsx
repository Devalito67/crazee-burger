import styled from "styled-components";
import AdminPanel from "./AdminPanel";
import AdminTabs from "./AdminTabs";

export default function Admin() {

    return <AdminStyled>
        <AdminTabs />
        <AdminPanel />
    </AdminStyled>
}

const AdminStyled = styled.div`
display: flex;
flex-direction: column;
height: 294.5px;
border: 2px solid blue;
`;