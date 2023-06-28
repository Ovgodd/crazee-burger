import React, { useContext } from "react";
import styled from "styled-components";
import { refreshPage } from "../../../../utils/Window";
import BurgerLogo from "../../../reusable-ui/BurgerLogo";
import OrderContext from "../../../../context/OrderContext";

export default function LeftSide() {
  const { setIsPageRefresh } = useContext(OrderContext);

  const handleRefreshPage = () => {
    refreshPage();
    setIsPageRefresh(true);
  };

  return (
    <LeftSideStyled onClick={handleRefreshPage}>
      <BurgerLogo className={"logo-order-page"} />
    </LeftSideStyled>
  );
}

const LeftSideStyled = styled.div`
  .logo-order-page {
    cursor: pointer;
    object-fit: cover;
  }
`;
