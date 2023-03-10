import styled from "styled-components";
import { theme } from "../../theme";
export default function Product({ title, image, price }) {
  return (
    <CardStyled>
      <img src={image} alt="burger" />
      <div className="interact-container">
        <h1>{title}</h1>
        <div className="description">
          <span>{price}</span>
          <button>Ajouter</button>
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

      button {
        border-radius: ${theme.borderRadius.round};
        border: 1px solid;
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        font-size: ${theme.fonts.size.XS};
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.white};
        width: 95px;
        height: 38px;

        &:hover {
          background-color: ${theme.colors.white};
          border-color: ${theme.colors.primary};
          color: ${theme.colors.primary};
          border: 1px solid;
          transition: 0.3s;
          cursor: pointer;
        }
        &:active {
          background-color: ${theme.colors.primary};
          border-color: ${theme.colors.white};
          color: ${theme.colors.white};
          transition: 0.3s;

          cursor: pointer;
        }
      }
    }
  }
`;
