/* eslint-disable react/prop-types */
import styled from "styled-components";
import AdminPanel from "./AdminPanel";
import AdminTabs from "./AdminTabs";
import OrderPageContext from "../../context/OrderPageContext";
import { useContext } from "react";

export default function Admin() {
    const { isCollapsed} = useContext(OrderPageContext)

    return <AdminStyled>
        <AdminTabs />
        {isCollapsed && <AdminPanel/>}
    </AdminStyled>
}

const AdminStyled = styled.div`
display: flex;
flex-direction: column;
border: 2px solid blue;
`;