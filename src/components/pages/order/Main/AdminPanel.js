import { useContext } from "react";
import styled from "styled-components";
import AdminContext from "../../../../context/AdminContext";
import { theme } from "../../../../theme";
import PanelAdminContent from "./PanelAdminContent";
import PanelAdminTabs from "./PanelAdminTabs";

export default function AdminPanel({ text }) {
  const { isAdmin, setIsAdmin } = useContext(AdminContext);
  return (
    <AdminPanelStyled>
      <div className={isAdmin ? "open-panel" : "close-panel"}>
        <PanelAdminTabs />
        <PanelAdminContent />
      </div>
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  position: absolute;
  height: 300px;
  width: 1400px;
  bottom: 20px;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-sizing: border-box;
  overflow: hidden;

  .product-container {
    padding-left: 20px;
    background: ${theme.colors.white};
    position: absolute;
    height: 300px;
    width: 1400px;
    border-top: 1px solid #e4e5e9;
    box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);
  }
  .open-panel {
    display: block;
  }
  .close-panel {
    display: none;
  }
`;
