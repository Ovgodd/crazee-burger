import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import BasketProduct from "../../../reusable-ui/BasketProduct";
import OrderContext from "../../../../context/OrderContext";

export default function Body() {
  const { basket } = useContext(OrderContext);

  useEffect(() => {
    console.log(basket + "basket log");
  }, [basket]);

  return (
    <BodyStyled>
      {basket.map(({ id, image, title, price, quantity }) => (
        <BasketProduct
          key={id}
          image={image}
          title={title}
          price={price}
          quantity={quantity}
        />
      ))}
      {/* <span>{label}</span> */}
    </BodyStyled>
  );
}
const BodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.2);
  background: ${theme.colors.background_white};
  font-family: ${theme.fonts.family.stylish};
  font-style: normal;
  font-weight: ${theme.fonts.weights.regular};
  font-size: ${theme.fonts.size.P4};
  line-height: 72px;
  color: ${theme.colors.greyBlue};
`;
