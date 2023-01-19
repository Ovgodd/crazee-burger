import React from "react";
import styled from "styled-components";

export default function Main() {
  return <MainStyled></MainStyled>;
}
const MainStyled = styled.div`
  background-color: red;
  height: 90vh;
  border-radius: 0px 0px 15px 15px;
  background: #f5f5f7;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`;
