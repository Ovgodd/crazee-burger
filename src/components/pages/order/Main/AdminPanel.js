import { useContext } from "react";
import styled from "styled-components";
import AdminContext from "../../../../context/AdminContext";
import { theme } from "../../../../theme";
import PanelAdminContent from "./PanelAdminContent";
import PanelAdminTabs from "./PanelAdminTabs";

export default function AdminPanel({ text }) {
  const { isToggle, setIsToggle } = useContext(AdminContext);

  return (
    <AdminPanelStyled>
      <PanelAdminTabs />
      <div className={isToggle ? "close-content" : "open-content"}>
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
