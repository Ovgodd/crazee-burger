import styled from "styled-components";
import { theme } from "../../../../theme";
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
    </CardStyled>
  );
}
const CardStyled = styled.div`
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
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
      font-size: ${theme.fonts.P4};
    }
    .description {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 190px;
      span {
        color: ${theme.colors.primary};
        font-weight: ${theme.weights.regular};
      }
      button {
        border-radius: ${theme.borderRadius.round};
        border: none;
        background-color: ${theme.colors.primary};
        color: ${theme.colors.white};
        font-size: ${theme.fonts.XS};
        font-weight: ${theme.weights.bold};
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
          border: 1px solid;
          transition: 0.3s;
          cursor: pointer;
        }
      }
    }
  }
`;
