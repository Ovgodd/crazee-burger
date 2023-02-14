import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../../../context/OrderContext";
import { theme } from "../../../../theme";
import AdminPanel from "./AdminPanel";
import AdminTabs from "./AdminTabs";

export default function Admin() {
  const { isCollapsed } = useContext(OrderContext);

  return (
    <AdminPanelStyled>
      <AdminTabs />
      {!isCollapsed && <AdminPanel />}
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  overflow: hidden;
`;
