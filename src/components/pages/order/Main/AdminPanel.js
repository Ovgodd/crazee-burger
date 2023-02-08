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
  width: 1400px;
  bottom: 0px;
  margin-bottom: 25px;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  overflow: hidden;

  .close-content {
    /* display: none; */

    //ne marche pas
    height: 0px;
  }
  .open-content {
    /* display: block; */

    //ne marche pas
    height: 260px;
  }
`;
