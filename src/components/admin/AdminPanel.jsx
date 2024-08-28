/* eslint-disable react/prop-types */
import styled from "styled-components";
import AdminAddProduct from "./AdminAddProduct";
import AdminEditProduct from "./AdminEditProduct";

export default function AdminPanel({selectedTab}) {
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
