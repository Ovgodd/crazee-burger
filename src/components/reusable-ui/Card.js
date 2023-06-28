import styled, { css } from "styled-components";
import { theme } from "../../theme";
import DeleteButton from "./Buttons/DeleteButton";
import Button from "./Buttons/Button";

export default function Card({
  onClick,
  id,
  title,
  image,
  price,
  onDelete,
  hasButton,
  isSelected,
  onAdd,
}) {
  //state (vide)

  //comportements (vide)

  //affichage
  return (
    <CardStyled
      hasButton={hasButton}
      onClick={onClick}
      className={isSelected ? "selected" : ""}
    >
      {hasButton && (
        <DeleteButton onClick={onDelete} className="delete-button" />
      )}
      <img src={image} alt="product" />
      <div className="interact-container">
        <h1>{title}</h1>
        <div className="description">
          <span className="price">{price}</span>
          <Button
            onClick={onAdd}
            label="Ajouter"
            className="primary-button primary-selected"
          />
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
    ${({ hasButton }) => hasButton && cardStyled.hover};
  }

  &.selected {
    ${({ hasButton }) => hasButton && cardStyled.selected};
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
      white-space: nowrap;
      overflow: hidden;
      width: 190px;
      margin-bottom: ${theme.spacing.xxs};
      text-overflow: ellipsis;
      font-family: ${theme.fonts.family.stylish};
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
  box-shadow: ${theme.shadows.orangeHighlight}, ${theme.shadows.medium};
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
    &:hover {
      color: ${theme.colors.white};
      background: ${theme.colors.primary};
      border-color: ${theme.colors.white};
    }
    &:active {
      color: ${theme.colors.primary};
      background: ${theme.colors.white};
      border-color: ${theme.colors.primary};
      transition: 0.3s;
    }
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
