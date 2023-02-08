import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function PanelAdminContent({ productText }) {
  return (
    <PanelAdminContentStyled className="product-container">
      <span>{productText}</span>
    </PanelAdminContentStyled>
  );
}
const PanelAdminContentStyled = styled.div`
  padding: 10px;
  background: ${theme.colors.white};
  position: absolute;
  height: 300px;
  width: 1400px;
  border-top: 1px solid #e4e5e9;
  box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.1);
`;
