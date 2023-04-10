import React, { useContext } from "react";
import styled from "styled-components";
import Card from "../../../reusable-ui/Card";
import { formatPrice } from "../../../../utils/maths";
import { theme } from "../../../../theme";
import OrderContext from "../../../../context/OrderContext";
import EmptyMenu from "./EmptyMenu";
import ComingSoon from "../../../../images/coming-soon.png";

export default function Menu() {
  const {
    setIsCollapsed,
    menuProducts,
    handleDelete,
    handleReset,
    setSelectedTab,
    isCardSelected,
    isAdmin,
    inputRef,
    productInfo,
    setProductInfo,
    DEFAULT_PRODUCT_INFO,
    setSelectedProduct,
    setIsCardSelected,
    selectedProduct,
  } = useContext(OrderContext);

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
    console.log(productSelected);
    await setSelectedProduct(productSelected);
    await setSelectedTab("edit");
    await setIsCardSelected(id === isCardSelected ? false : id);
    await setIsCollapsed(false);
    await setProductInfo(productSelected);
    inputRef.current.focus();
  };

  const handleCardDelete = (id) => {
    handleDelete(id);
    if (productInfo.id === id) {
      setProductInfo(DEFAULT_PRODUCT_INFO);
    }
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
          selectedProduct={
            selectedProduct && selectedProduct.id === id
              ? selectedProduct
              : null
          }
          onDelete={() => handleCardDelete(id)}
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;
  box-shadow: ${theme.shadows.strong};
  background: ${theme.colors.background_white};
  overflow-y: auto;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`;
