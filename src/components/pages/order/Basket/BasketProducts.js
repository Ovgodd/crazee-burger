import styled from "styled-components";
import { theme } from "../../../../theme";
import BasketCard from "../../../reusable-ui/BasketCard";
import ComingSoon from "../../../../images/coming-soon.png";
import { formatPrice } from "../../../../utils/maths";

export default function BasketProducts({ basket }) {
  return (
    <BasketProductsStyled>
      {basket.map(({ id, imageSource, title, price, quantity }) => (
        <BasketCard
          key={id}
          title={title}
          image={imageSource ? imageSource : ComingSoon}
          price={formatPrice(price)}
          quantity={quantity}
        />
      ))}
    </BasketProductsStyled>
  );
}
const BasketProductsStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  overflow-y: scroll;
  box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.2);
  background: ${theme.colors.background_white};
`;
