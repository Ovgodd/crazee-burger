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
              classNames={"global-cards"}
              key={menuProduct.id}
              timeout={{ enter: 5000, exit: 5000 }}
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
                  isSelected={checkIfProductIsSelected(
                    selectedProduct.id,
                    basketProduct.id
                  )}
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
  .global-cards-enter {
    .unique-card {
      background: green;
    }
  }
  .global-cards-enter-active {
    .unique-card {
      background: blue;
      transition: 2s;
    }
  }
  .global-cards-enter-done {
    .unique-card {
      background: pink;
    }
  }
`;
