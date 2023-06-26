import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Card from "../../../reusable-ui/Card";
import { formatPrice } from "../../../../utils/maths";
import { theme } from "../../../../theme";
import OrderContext from "../../../../context/OrderContext";
import EmptyMenu from "./EmptyMenu";
import COMING_SOON from "../../../../images/coming-soon.png";
import { findObjectById, isEmpty } from "../../../../utils/array";
import { fakeMenu } from "../../../../fakeData/fakeMenu";

export default function Menu() {
  const {
    setIsCollapsed,
    menuProducts,
    setMenuProducts,
    handleDelete,
    handleReset,
    setSelectedTab,
    isAdmin,
    inputRef,
    newProductInfo,
    setNewProductInfo,
    setSelectedProduct,
    selectedProduct,
    handleAddToBasket,
    handleDeleteToBasket,
    userValue,
  } = useContext(OrderContext);

  useEffect(() => {
    if (userValue) {
      setMenuProducts(userValue.menu || fakeMenu.LARGE);
    }
  }, [userValue]);

  if (isEmpty(menuProducts))
    return <EmptyMenu isAdmin={isAdmin} onClick={handleReset} />;

  const handleCardClick = async (id) => {
    if (!isAdmin) return;
    const productSelected = findObjectById(id, menuProducts);
    await setSelectedProduct(productSelected);
    await setSelectedTab("edit");
    await setIsCollapsed(false);
    await setNewProductInfo(productSelected);
    inputRef.current.focus();
  };

  const handleCardDelete = (id, event) => {
    event.stopPropagation();
    handleDelete(id);
    handleDeleteToBasket(id);
    id === newProductInfo.id && setSelectedProduct(null);
    inputRef.current.focus();
    console.log(userValue, "userValue from menu");
    // deleteItem(userValue, id);
  };

  const handleOnAdd = (e, idProductToAdd) => {
    e.stopPropagation();
    const productToAdd = findObjectById(idProductToAdd, menuProducts);
    console.log(userValue, "userValue from menu");
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
