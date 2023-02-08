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
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminTab, setAdminTab] = useState(2);

  const adminContextValue = {
    isToggle,
    setIsToggle,

    isAdmin,
    setIsAdmin,

    adminTab,
    setAdminTab,
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
    max-width: 1400px;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
