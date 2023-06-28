import styled from "styled-components";
import { theme } from "../../../../theme";
import BasketCard from "../../../reusable-ui/BasketCard";
import COMING_SOON from "../../../../images/coming-soon.png";
import { formatPrice } from "../../../../utils/maths";
import OrderContext from "../../../../context/OrderContext";
import { useContext } from "react";
import { findObjectById } from "../../../../utils/array";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { checkIfProductIsSelected } from "../Main/helper";

export default function BasketProducts() {
  const {
    username,
    basket,
    handleDeleteToBasket,
    selectedProduct,
    menuProducts,
    isAdmin,
    handleProductClick,
  } = useContext(OrderContext);
  const handleOnDelete = (id) => {
    handleDeleteToBasket(id, username);
  };

  return (
    <BasketProductsStyled>
      <TransitionGroup>
        {basket.map((basketProduct) => {
          const menuProduct = findObjectById(basketProduct.id, menuProducts);
          return (
            <CSSTransition
              appear={true}
              classNames={"global-cards"}
              timeout={700}
              key={basketProduct.id}
            >
              <div className="basket-card">
                <BasketCard
                  onClick={() => handleProductClick(menuProduct.id)}
                  title={menuProduct.title}
                  imageSource={
                    menuProduct.imageSource
                      ? menuProduct.imageSource
                      : COMING_SOON
                  }
                  price={formatPrice(menuProduct.price)}
                  quantity={basketProduct.quantity}
                  isAdmin={isAdmin}
                  onDelete={() => handleOnDelete(menuProduct.id)}
                  isSelected={
                    selectedProduct &&
                    checkIfProductIsSelected(
                      selectedProduct.id,
                      basketProduct.id
                    )
                  }
                  className="unique-card"
                />
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </BasketProductsStyled>
  );
}

const BasketProductsStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  .basket-card {
    /* border: 1px solid blue; */
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
    :first-child {
      margin-top: 20px;
      /* border: 1px solid red; */
    }
    :last-child {
      margin-bottom: 20px;
    }
  }
  .global-cards-appear {
    .unique-card {
      transform: translateX(100px);
      opacity: 0%;
    }
  }
  .global-cards-appear-active {
    .unique-card {
      transition: 700ms;
      transform: translateX(0px);
      opacity: 100%;
    }
  }

  .global-cards-enter {
    .unique-card {
      transform: translateX(100px);
      opacity: 0%;
    }
  }
  .global-cards-enter-active {
    .unique-card {
      transition: 700ms;
      transform: translateX(0px);
      opacity: 100%;
    }
  }
  .global-cards-exit {
    .unique-card {
      transform: translateX(0px);
      opacity: 100%;
    }
  }
  .global-cards-exit-active {
    .unique-card {
      transition: 700ms;
      transform: translateX(-100px);
      opacity: 0%;
    }
  }
`;
