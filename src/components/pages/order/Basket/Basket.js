import React from "react";
import styled from "styled-components";

export default function Basket() {
  return (
    <BasketStyled>
      <div className="header">
        <span className="total-txt">TOTAL</span>
        <span className="price-txt">0,00 €</span>
      </div>
      <div className="body">
        <span className="command">votre commande est vide.</span>
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
  border-radius: 0px 0px 0px 15px;

  .header {
    background: #292729;
    padding: 0px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    .total-txt {
      font-family: "Amatic SC";
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      line-height: 45px;
      display: flex;
      align-items: center;
      letter-spacing: 2px;
      color: #ffa01b;
    }
    .price-txt {
      font-family: "Amatic SC";
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 45px;
      display: flex;
      align-items: center;
      letter-spacing: 2px;
      color: #ffa01b;
    }
  }
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    background: red;
    flex: 1;
    background: #f5f5f7;
    box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.2);

    .command {
      font-family: "Amatic SC";
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      line-height: 72px;
      color: #747b91;
    }
  }
  .footer {
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0px 0px 0px 15px;
    background: #292729;

    .footer-txt {
      font-family: "Amatic SC";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 25px;
      display: flex;
      align-items: center;
      color: #ffffff;
    }
  }
`;
