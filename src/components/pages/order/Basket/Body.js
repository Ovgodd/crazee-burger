import React from "react";
import styled from "styled-components";

export default function Body({ label }) {
  return (
    <BodyStyled>
      <span>{label}</span>
    </BodyStyled>
  );
}
const BodyStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  flex: 1;
  background: #f5f5f7;
  box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.2);
  font-family: "Amatic SC";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 72px;
  color: #747b91;
`;
