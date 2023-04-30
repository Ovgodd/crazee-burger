import styled from "styled-components";
import { theme } from "../../../../theme";
import BasketCard from "../../../reusable-ui/BasketCard";
import ComingSoon from "../../../../images/coming-soon.png";
import { formatPrice } from "../../../../utils/maths";
import OrderContext from "../../../../context/OrderContext";
import { useContext } from "react";

export default function BasketProducts() {
  const { basket, isAdmin, handleDeleteToBasket } = useContext(OrderContext);
  const handleOnDelete = (id) => {
    handleDeleteToBasket(id);
  };

  return (
    <BasketProductsStyled>
      {basket.map((basketProduct) => (
        <BasketCard
          key={basketProduct.id}
          title={basketProduct.title}
          imageSource={
            basketProduct.imageSource ? basketProduct.imageSource : ComingSoon
          }
          price={formatPrice(basketProduct.price)}
          quantity={basketProduct.quantity}
          isAdmin={isAdmin}
          onDelete={() => handleOnDelete(basketProduct.id)}
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
  box-shadow: ${theme.shadows.basket};
  background: ${theme.colors.background_white};
`;
