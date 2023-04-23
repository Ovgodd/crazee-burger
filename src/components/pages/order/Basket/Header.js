import React from "react";
import styled from "styled-components";

export default function Header({ price, label }) {
  return (
    <HeaderStyled>
      <span>{label}</span>
      <span>{price}</span>
    </HeaderStyled>
  );
}
const HeaderStyled = styled.div`
  background: #292729;
  padding: 0px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  font-family: "Amatic SC";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  display: flex;
  align-items: center;
  letter-spacing: 2px;
  color: #ffa01b;
`;
