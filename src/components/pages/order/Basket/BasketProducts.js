import styled from "styled-components";
import { theme } from "../../../../theme";
import BasketCard from "../../../reusable-ui/BasketCard";
import COMING_SOON from "../../../../images/coming-soon.png";
import { formatPrice } from "../../../../utils/maths";
import OrderContext from "../../../../context/OrderContext";
import { useContext } from "react";
import { findObjectById } from "../../../../utils/array";

export default function BasketProducts({ basket, handleDeleteToBasket }) {
  const { selectedProduct, menuProducts, isAdmin, handleProductClick } =
    useContext(OrderContext);
  const handleOnDelete = (id) => {
    handleDeleteToBasket(id);
  };

  return (
    <BasketProductsStyled>
      {basket.map((basketProduct) => {
        const menuProduct = findObjectById(basketProduct.id, menuProducts);
        return (
          <BasketCard
            onClick={() => handleProductClick(menuProduct.id)}
            key={menuProduct.id}
            title={menuProduct.title}
            imageSource={
              menuProduct.imageSource ? menuProduct.imageSource : COMING_SOON
            }
            price={formatPrice(menuProduct.price)}
            quantity={basketProduct.quantity}
            isAdmin={isAdmin}
            onDelete={() => handleOnDelete(menuProduct.id)}
            isSelected={
              selectedProduct && selectedProduct.id === menuProduct.id
                ? selectedProduct
                : null
            }
          />
        );
      })}
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
