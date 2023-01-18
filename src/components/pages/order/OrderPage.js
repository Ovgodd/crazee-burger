import React from "react";
import styled from "styled-components";
import { theme } from "../../../theme";
import OrderContainer from "./OrderContainer";

export default function OrderPage() {
  return (
    <OrderPageStyled>
      <OrderContainer />
    </OrderPageStyled>
  );
}
const OrderPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: ${theme.colors.primary};
`;
