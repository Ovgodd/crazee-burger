import React from "react";
import styled from "styled-components";

export default function Basket() {
  return (
    <BasketStyled>
      <div className="header">
        <span>TOTAL</span>
        <span>0,00 E</span>
      </div>
      <div className="body">
        <span className="command">votre commande est vide</span>
      </div>
      <div className="footer">
        <span className="footer-txt">Codé avec ❤️ et React.JS</span>
      </div>
    </BasketStyled>
  );
}
const BasketStyled = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;
  height: 100%;
  .header {
    padding: 0px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    background: orange;
  }
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: red;
    flex: 1;
    .command {
    }
  }
  .footer {
    height: 70px;
    background: green;
    display: flex;
    justify-content: center;
    align-items: center;
    .footer-txt {
      font-family: "Amatic SC";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 25px;
      display: flex;
      align-items: center;
    }
  }
`;
