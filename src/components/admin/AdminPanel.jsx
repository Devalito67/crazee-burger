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
`;
