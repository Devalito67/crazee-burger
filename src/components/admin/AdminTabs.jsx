import styled from "styled-components";
import Tab from "./Tab";
export default function AdminTabs() {
    return <AdminTabsStyled>
        <Tab />
        <Tab />
        <Tab />
    </AdminTabsStyled>
}

const AdminTabsStyled = styled.div`
  display: flex;
  height: 44px;
 border: 2px solid red;
`;
