import { useContext } from "react";
import styled from "styled-components";
import OrderContext from "../../context/OrderContext";
import { theme } from "../../theme";
import { TiDelete } from "react-icons/ti";
import SecondaryAddButton from "./SecondaryAddButton";
export default function Product({ id, title, image, price, onProductDelete }) {
  const { isAdmin } = useContext(OrderContext);

  return (
    <CardStyled>
      <button onClick={() => onProductDelete(id)} className="icon-container">
        {isAdmin && <TiDelete className="icon" />}
      </button>
      <img src={image} alt="burger" />
      <div className="interact-container">
        <h1>{title}</h1>
        <div className="description">
          <span>{price}</span>
          <SecondaryAddButton label="Ajouter" />
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
  padding: 20px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${theme.borderRadius.extraRound};
  background: ${theme.colors.white};
  position: relative;
  .icon-container {
    top: 15px;
    right: 10px;
    background: none;
    border: none;
    color: #ffa01b;
    position: absolute;
    cursor: pointer;
    .icon {
      width: 30px;
      height: 30px;
    }
  }

  img {
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
