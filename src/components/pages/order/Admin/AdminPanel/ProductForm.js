import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import AdminForm from "../../../../reusable-ui/AdminForm";
import { DEFAULT_PRODUCT_INFO } from "../../../../enums/product";
import { useSuccessMessage } from "../../../../../hooks/useDisplaySuccess";
import { replaceFrenchCommaWithDot } from "../../../../../utils/maths";

export default function ProductForm() {
  const {
    newProductInfo,
    selectedProduct,
    inputRef,
    handleAdd,
    setNewProductInfo,
    handleEdit,
    handleEditInBasket,
  } = useContext(OrderContext);
  const { isSubmitted, displaySuccess } = useSuccessMessage();

  const handleChange = (event) => {
    const { name, value } = event.target;
    const updatedNewProductInfo = { ...newProductInfo, [name]: value };
    setNewProductInfo(updatedNewProductInfo);
    handleEdit(updatedNewProductInfo);
    handleEditInBasket(updatedNewProductInfo);
    handleEditInBasket(updatedNewProductInfo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newProductToAdd = {
      ...newProductInfo,
      id: new Date().getTime(),
      price: replaceFrenchCommaWithDot(newProductInfo.price),
    };
    handleAdd(newProductToAdd);
    setNewProductInfo(DEFAULT_PRODUCT_INFO); // reset form
    displaySuccess();
    console.log(typeof newProductInfo.price, "price :", newProductInfo.price);
  };

  return (
    <AdminForm
      product={newProductInfo}
      inputRef={inputRef}
      selectedProduct={selectedProduct}
      onChange={handleChange}
      onSubmit={handleSubmit}
      isSubmitted={isSubmitted}
    />
  );
}
