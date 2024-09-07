/* eslint-disable react/prop-types */
import styled from "styled-components";
import AdminAddProduct from "./adminForm/AdminAddProduct";
import AdminEditProduct from "./adminForm/AdminEditProduct";
import OrderPageContext from "../../../context/OrderPageContext";
import { useContext } from "react";
import HintMessage from "../../HintMessage";

export default function AdminPanel() {
  const { selectedTab, isCardSelected } = useContext(OrderPageContext)

  const adminPanelContent = () => {
    switch (selectedTab) {
      case "addProduct":
        return <AdminAddProduct />;
      case "editProduct":
        return isCardSelected ? <AdminEditProduct /> : <HintMessage />;
      default:
        return null;
    }
  };

  return <AdminPanelStyled>{adminPanelContent()}</AdminPanelStyled>;
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

`;

