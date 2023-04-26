import styled from "styled-components";
import { theme } from "../../../../theme";
import BasketCard from "../../../reusable-ui/BasketCard";

export default function BasketProducts({ basket }) {
  return (
    <BasketProductsStyled>
      {basket.map(({ id, imageSource, title, price, quantity }) => (
        <BasketCard
          key={id}
          image={imageSource}
          title={title}
          price={price}
          quantity={quantity}
        />
      ))}
    </BasketProductsStyled>
  );
}
const BasketProductsStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.2);
  background: ${theme.colors.background_white};
`;
