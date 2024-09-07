/* eslint-disable react/prop-types */
import styled from "styled-components";
import OrderPageContext from "../../context/OrderPageContext";
import { useContext } from "react";
import AdminTabs from "./adminPanel/adminTabs/AdminTabs";
import AdminPanel from "./adminPanel/AdminPanel";

export default function Admin() {
    const { isCollapsed } = useContext(OrderPageContext)
    return <AdminStyled>
        <AdminTabs />
        {!isCollapsed && <AdminPanel />}
    </AdminStyled>
}

const AdminStyled = styled.div`
display: flex;
width: 100%;
position:absolute;
bottom: 0;
left:0;
flex-direction: column;
font-family: "Open Sans", cursive;
`;