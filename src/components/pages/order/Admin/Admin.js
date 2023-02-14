import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext";
import { theme } from "../../../../theme";
import AdminPanel from "./AdminPanel";
import PanelAdminTabs from "./AdminTabs";

export default function Admin() {
  const { isCollapsed, setisCollapsed } = useContext(OrderContext);

  return (
    <AdminPanelStyled>
      <PanelAdminTabs />
      <div className={isCollapsed ? "close-content" : "open-content"}>
        <AdminPanel />
      </div>
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0px;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  overflow: hidden;

  .close-content {
    height: 0px;
  }
  .open-content {
    height: 260px;
  }
`;
