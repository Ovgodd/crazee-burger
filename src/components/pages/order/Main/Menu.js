import React, { useContext } from "react";
import styled from "styled-components";
import Card from "../../../reusable-ui/Card";
import { formatPrice } from "../../../../utils/maths";
import { theme } from "../../../../theme";
import OrderContext from "../../../../context/OrderContext";
import EmptyMenu from "./EmptyMenu";
import ComingSoon from "../../../../images/coming-soon.png";
import { useBasket } from "../../../../hooks/useBasket";

export default function Menu() {
  const {
    setIsCollapsed,
    menuProducts,
    handleDelete,
    handleReset,
    setSelectedTab,
    isAdmin,
    inputRef,
    newProductInfo,
    setNewProductInfo,
    setSelectedProduct,
    selectedProduct,
  } = useContext(OrderContext);
  const { handleAddToBasket } = useBasket();

  const label = {
    question: isAdmin ? "Le menu est vide ?" : "Victime de notre succès ! :D",
    message: isAdmin
      ? "Cliquez ci-dessous pour le réinitialiser"
      : "De nouvelles recettes sont en cours de préparation.",
    button: "Générer de nouveaux produits",
    bottomMessage: "À très vite",
  };

  if (menuProducts.length === 0)
    return <EmptyMenu onClick={handleReset} label={label} />;

  const handleCardClick = async (id) => {
    if (!isAdmin) return;
    const productSelected = menuProducts.find((product) => product.id === id);
    await setSelectedProduct(productSelected);
    await setSelectedTab("edit");
    await setIsCollapsed(false);
    await setNewProductInfo(productSelected);
    inputRef.current.focus();
    console.log(productSelected);
  };

  const handleCardDelete = (id, event) => {
    event.stopPropagation();
    handleDelete(id);
    id === newProductInfo.id && setSelectedProduct(null);
    inputRef.current.focus();
  };
  const onClickAdd = (e, id, title, price, quantity) => {
    e.stopPropagation();
    handleAddToBasket({ id, title, price, quantity });
  };

  return (
    <MenuStyled>
      {menuProducts.map(({ id, title, imageSource, price, quantity }) => (
        <Card
          key={id}
          id={id}
          quantity={quantity}
          title={title}
          image={imageSource ? imageSource : ComingSoon}
          price={formatPrice(price)}
          selectedProduct={
            selectedProduct && selectedProduct.id === id
              ? selectedProduct
              : null
          }
          onDelete={(e) => handleCardDelete(id, e)}
          onAdd={(e) => onClickAdd(e, id, title, price, quantity)}
          onClick={() => handleCardClick(id)}
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
