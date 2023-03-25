import React, { useContext } from "react";
import styled from "styled-components";
import Card from "../../../reusable-ui/Card";
import { formatPrice } from "../../../../utils/maths";
import { theme } from "../../../../theme";
import OrderContext from "../../../../context/OrderContext";
import { fakeMenu } from "../../../../fakeData/fakeMenu";
import EmptyMenu from "./EmptyMenu";

export default function Menu() {
  const { menuProducts, setMenuProducts } = useContext(OrderContext);

  const handleDelete = (id) => {
    const updatedMenu = menuProducts.filter((menu) => {
      return menu.id !== id;
    });
    setMenuProducts(updatedMenu);
  };
  const handleClick = () => {
    setMenuProducts(fakeMenu.MEDIUM);
  };

  if (menuProducts.length === 0) return <EmptyMenu onClick={handleClick} />;

  return (
    <MenuStyled>
      {menuProducts.map(({ id, title, imageSource, price }) => (
        <Card
          key={id}
          id={id}
          title={title}
          image={imageSource}
          price={formatPrice(price)}
          handleDelete={handleDelete}
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
