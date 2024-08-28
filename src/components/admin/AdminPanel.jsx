/* eslint-disable react/prop-types */
import styled from "styled-components";
import AdminAddProduct from "./AdminAddProduct";
import AdminEditProduct from "./AdminEditProduct";
import OrderPageContext from "../../context/OrderPageContext";
import { useContext } from "react";

export default function AdminPanel() {
  const {selectedTab} = useContext(OrderPageContext)
  return (
    <AdminPanelStyled>
      {selectedTab === "addProduct" && <AdminAddProduct/>}
      {selectedTab === "editProduct" && <AdminEditProduct/>}
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
  display: flex;
  height: 250px;
  background-color: white;
  box-shadow: 0 -6px 8px -2px rgba(0,0,0,0.1);
  border: 1px solid #E4E5E9;
`;
