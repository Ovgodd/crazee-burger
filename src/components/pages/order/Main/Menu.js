import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Card from "../../../reusable-ui/Card";
import { formatPrice } from "../../../../utils/maths";
import { theme } from "../../../../theme";
import OrderContext from "../../../../context/OrderContext";
import EmptyMenu from "./EmptyMenu";
import COMING_SOON from "../../../../images/coming-soon.png";
import { findObjectById, isEmpty } from "../../../../utils/array";
import { refreshPage } from "../../../../utils/Window";

export default function Menu() {
  const {
    menuProducts,
    handleDelete,
    handleReset,
    isAdmin,
    inputRef,
    newProductInfo,
    setSelectedProduct,
    selectedProduct,
    handleAddToBasket,
    handleDeleteToBasket,
    setBasket,
    basket,
  } = useContext(OrderContext);

  if (isEmpty(menuProducts))
    return <EmptyMenu isAdmin={isAdmin} onClick={handleReset} />;

  const handleCardDelete = (id, event) => {
    event.stopPropagation();
    handleDelete(id);
    handleDeleteToBasket(id);
    id === newProductInfo.id && setSelectedProduct(null);
    inputRef.current.focus();
  };

  const handleOnAdd = (e, idProductToAdd) => {
    e.stopPropagation();
    const productToAdd = findObjectById(idProductToAdd, menuProducts);
    handleAddToBasket(productToAdd);
  };

  return (
    <MenuStyled>
      {menuProducts.map(({ id, title, imageSource, price, quantity }) => (
        <Card
          key={id}
          id={id}
          quantity={quantity}
          title={title}
          image={imageSource ? imageSource : COMING_SOON}
          price={formatPrice(price)}
          isSelected={
            selectedProduct && selectedProduct.id === id
              ? selectedProduct
              : null
          }
          onDelete={(e) => handleCardDelete(id, e)}
          onAdd={(e) => handleOnAdd(e, id)}
          onClick={() => handleProductClick(id)}
          hasButton={isAdmin}
        />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  justify-items: center;
  padding: 50px 50px 150px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 60px;
  box-shadow: ${theme.shadows.strong};
  background: ${theme.colors.background_white};
  overflow-y: auto;
  /* border-bottom-left-radius: ${theme.borderRadius.extraRound}; */
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`;
