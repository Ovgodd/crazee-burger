import styled from "styled-components";
import { theme } from "../../../../theme";
import Tabs from "./Tabs";

export default function AdminPanel(heithWhenAdmin) {
  return (
    <AdminPanelStyled>
      <Tabs height={heithWhenAdmin} />
      <div className="add-product">
        <p>Ajouter un produit</p>
      </div>
    </AdminPanelStyled>
  );
}

const AdminPanelStyled = styled.div`
  position: absolute;
  height: ${(props) => (props.isToggle ? "0px" : "300px")};
  width: 1400px;
  bottom: 20px;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-sizing: border-box;
  overflow: hidden;

  .add-product {
    padding-left: 20px;
    background: ${theme.colors.white};
    position: absolute;
    height: 300px;
    width: 1400px;
    border-top: 1px solid #e4e5e9;
    box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);
  }
`;
