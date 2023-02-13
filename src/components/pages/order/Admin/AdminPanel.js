import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext";
import { theme } from "../../../../theme";
import PanelAdminContent from "./PanelAdminContent";
import PanelAdminTabs from "./AdminTabs";

export default function AdminPanel() {
  const { isCollapse, setIsCollapse } = useContext(OrderContext);

  return (
    <AdminPanelStyled>
      <PanelAdminTabs />
      <div className={isCollapse ? "close-content" : "open-content"}>
        <PanelAdminContent />
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
