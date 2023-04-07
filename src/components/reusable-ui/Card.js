import { useContext } from "react";
import styled, { css } from "styled-components";
import OrderContext from "../../context/OrderContext";
import { theme } from "../../theme";
import DeleteButton from "./Buttons/DeleteButton";
import Button from "./Buttons/Button";

export default function Card({
  isCardSelected,
  onClick,
  id,
  title,
  image,
  price,
  onDelete,
}) {
  const { isAdmin } = useContext(OrderContext);

  const handleClick = () => {
    onClick(id);
  };

  return (
    <CardStyled
      isAdmin={isAdmin}
      onClick={handleClick}
      className={isCardSelected ? "selected" : ""}
    >
      {isAdmin && <DeleteButton onClick={onDelete} className="delete-button" />}
      <img src={image} alt="product" />
      <div className="interact-container">
        <h1>{title}</h1>
        <div className="description">
          <span className="price">{price}</span>
          <Button label="Ajouter" className="primary-button primary-selected" />
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
  &:hover {
    ${({ isAdmin }) => isAdmin && cardStyled.hover};
  }
  &.selected {
    ${({ isAdmin }) => isAdmin && cardStyled.selected};
  }
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
      white-space: normal;
      overflow: hidden;
      width: 190px;
      margin-bottom: ${theme.spacing.xxs};
      text-overflow: ellipsis;
      font-family: "Amatic SC", cursive;
      font-size: ${theme.fonts.size.P4};
      margin: auto;
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
      .primary-button {
        width: 95px;
        height: 38px;
        font-size: ${theme.fonts.size.XS};
        font-weight: ${theme.fonts.weights.bold};
      }
    }
  }
`;

const hoverStyle = css`
  background: rgba(255, 255, 255, 0.002);
  box-shadow: 0px 0px 8px #ff9a23, ${theme.shadows.medium};
  border-radius: 15px;
  background: ${theme.colors.white};
  transition: transform 0.3s ease-in-out;
  transform: scale(1.05);
  cursor: pointer;
`;
const selectedStyle = css`
  background-color: ${theme.colors.primary};
  .primary-selected {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};
  }
  .description .price {
    color: ${theme.colors.white};
  }
  .delete-button {
    color: ${theme.colors.white};
    &:hover {
      color: ${theme.colors.red};
    }
    &:active {
      color: ${theme.colors.white};
      transition: 0.3s;
    }
  }
`;
const cardStyled = {
  hover: hoverStyle,
  selected: selectedStyle,
};
