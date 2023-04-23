import React from "react";
import styled from "styled-components";

export default function Footer({ label }) {
  return (
    <FooterStyled>
      <span>{label}</span>
    </FooterStyled>
  );
}
const FooterStyled = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0px 0px 0px 15px;
  background: #292729;
  font-family: "Amatic SC";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;
