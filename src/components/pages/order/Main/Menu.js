import React, { useContext } from "react";
import styled from "styled-components";
import CardStyled from "../../../reusable-ui/Card";
import { formatPrice } from "../../../../utils/maths";
import { theme } from "../../../../theme";
import OrderContext from "../../../../context/OrderContext";
import { LARGE, SMALL } from "../../../../fakeData/fakeMenu";

export default function Menu() {
  const { fakeMenus, setFakeMenus } = useContext(OrderContext);

  const handleDelete = (id) => {
    const updatedMenu = fakeMenus.filter((menu) => {
      return menu.id !== id;
    });
    setFakeMenus(updatedMenu);
  };

  if (fakeMenus.length === 0) {
    return (
      <div>
        <span>le menu est vide ? </span>
        <span>cliquez ci dessous pour le réinitialiser</span>
        <div>
          <button onClick={() => setFakeMenus(SMALL)}>
            Générer de nouveaux produits
          </button>
        </div>
      </div>
    );
  }
  return (
    <MenuStyled>
      {fakeMenus.map(({ id, title, imageSource, price }) => (
        <CardStyled
          key={id}
          id={id}
          title={title}
          image={imageSource}
          price={formatPrice(price)}
          onProductDelete={handleDelete}
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
