import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import AdminContext from "../../../context/AdminContext";
import { theme } from "../../../theme";
import Main from "./Main/Main";
import NavBar from "./Navbar/NavBar";

export default function OrderPage() {
  const { username } = useParams();

  const [isToggle, setIsToggle] = useState(false);

  const adminContextValue = {
    isToggle,
    setIsToggle,
  };
  return (
    <OrderPageStyled>
      <AdminContext.Provider value={adminContextValue}>
        <div className="container">
          <NavBar username={username} />
          <Main />
        </div>
      </AdminContext.Provider>
    </OrderPageStyled>
  );
}
const OrderPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${theme.colors.primary};

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
  }
`;
