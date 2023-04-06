import React, { useContext, useState } from "react";
import styled from "styled-components";
import Card from "../../../reusable-ui/Card";
import { formatPrice } from "../../../../utils/maths";
import { theme } from "../../../../theme";
import OrderContext from "../../../../context/OrderContext";
import EmptyMenu from "./EmptyMenu";
import ComingSoon from "../../../../images/coming-soon.png";

export default function Menu() {
  const { setSelectedProduct } = useContext(OrderContext);
  const {
    setIsCollapsed,
    menuProducts,
    handleDelete,
    handleReset,
    setSelectedTab,
    isCardSelected,
    setIsCardSelected,
  } = useContext(OrderContext);

  if (menuProducts.length === 0) return <EmptyMenu onClick={handleReset} />;

  const handleCardClick = (id) => {
    const selectedProduct = menuProducts.find((product) => product.id === id);
    setSelectedProduct(selectedProduct);

    setIsCardSelected(id === isCardSelected ? null : id);
    setSelectedTab("edit");
    setIsCollapsed(false);
  };

  return (
    <MenuStyled>
      {menuProducts.map(({ id, title, imageSource, price }) => (
        <Card
          key={id}
          id={id}
          title={title}
          image={imageSource ? imageSource : ComingSoon}
          price={formatPrice(price)}
          isCardSelected={id === isCardSelected}
          onDelete={() => handleDelete(id)}
          onClick={handleCardClick}
        />
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  justify-items: center;
  padding: 50px 50px 150px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  box-shadow: ${theme.shadows.strong};
  background: ${theme.colors.background_white};
  overflow-y: auto;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`;
