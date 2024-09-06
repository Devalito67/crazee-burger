/* eslint-disable react/prop-types */
import styled from "styled-components";
import AdminAddProduct from "./adminForm/AdminAddProduct";
import AdminEditProduct from "./adminForm/AdminEditProduct";
import OrderPageContext from "../../../context/OrderPageContext";
import { useContext } from "react";
import { HiCursorClick } from "react-icons/hi";


export default function AdminPanel() {
  const { selectedTab, isCardSelected } = useContext(OrderPageContext)

  return (
    <AdminPanelStyled>
      {selectedTab === "addProduct" && <AdminAddProduct />}
      {(selectedTab === "editProduct" && isCardSelected ) && <AdminEditProduct />}
      {(selectedTab === "editProduct" && !isCardSelected ) && <div className="hintMessage">Cliquer sur un produit du menu pour le modifier <HiCursorClick /></div>}
    </AdminPanelStyled>
  )
}

const AdminPanelStyled = styled.div`
  display: flex;
  background-color: white;
  box-shadow: 0 -6px 8px -2px rgba(0,0,0,0.1);
  border: 1px solid #E4E5E9;
  padding-top: 30px;
  padding-left: 70px;
  padding-bottom: 48px;
  height: 240px;

  .hintMessage {
    display: flex;
    align-items: center;
    font-size: 24px;
    font-family: "Amatic SC", cursive;
    color: #747b91;
    height: 100%;
    column-gap: 10px;
  }
`;

