import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../context/OrderContext";
import { theme } from "../../theme";
import SecondaryButton from "./Buttons/SecondaryButton";
import DeleteButton from "./Buttons/DeleteButton";

export default function Card({ title, image, price, onDelete }) {
  const { isAdmin } = useContext(OrderContext);

  return (
    <CardStyled>
      {isAdmin && <DeleteButton onClick={onDelete} />}
      <img src={image} alt="product" />
      <div className="interact-container">
        <h1>{title}</h1>
        <div className="description">
          <span>{price}</span>
          <SecondaryButton label="Ajouter" />
        </div>
      </div>
      {/* <div className="admin-panel">ajouter un produit</div> */}
    </CardStyled>
  );
}

const CardStyled = styled.div`
  box-shadow: ${theme.shadows.medium};
  width: 200px;
  height: 300px;
  padding: ${theme.spacing.md};
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.white};
  position: relative;

  img {
    margin-top: 10px;
    width: 200px;
    height: 145px;
    object-fit: contain;
    object-position: center;
  }

  .interact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 110px;

    h1 {
      white-space: nowrap;
      overflow: hidden;
      width: 190px;
      margin-bottom: ${theme.spacing.xxs};
      text-overflow: ellipsis;
      font-family: "Amatic SC", cursive;
      font-size: ${theme.fonts.size.P4};
    }
    .description {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 190px;
      span {
        color: ${theme.colors.primary};
        font-weight: ${theme.fonts.weights.regular};
      }
    }
  }
`;
