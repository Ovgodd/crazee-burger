import React, { useContext, useState } from "react";
import OrderContext from "../../../../../context/OrderContext";
import Form from "../../../../reusable-ui/Form";
import EditInfoMessage from "./EditInfoMessage";
import SavingMessage from "./SavingMessage";
import { useSuccessMessage } from "../../../../../hooks/useDisplaySuccess";

export default function ProductEditForm() {
  const { username, newProductInfo, inputRef, setNewProductInfo, handleEdit } =
    useContext(OrderContext);

  const [valueOnFocus, setValueOnFocus] = useState();
  const { isSubmitted: isSaved, displaySuccess } = useSuccessMessage();

  const handleChange = async (event) => {
    const { name, value } = event.target;
    const updatedNewProductInfo = { ...newProductInfo, [name]: value };

    setNewProductInfo(updatedNewProductInfo);

    handleEdit(updatedNewProductInfo, username);
  };

  const handleOnFocus = (event) => {
    const inputValueOnFocus = event.target.value;
    setValueOnFocus(inputValueOnFocus);
    console.log(inputValueOnFocus, "inputValueOnFocus");
  };

  const handleOnBlur = (event) => {
    const valueOnBlur = event.target.value;
    if (valueOnFocus !== valueOnBlur) {
      displaySuccess();
    }
  };
  return (
    <Form
      product={newProductInfo}
      inputRef={inputRef}
      onChange={handleChange}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
    >
      {isSaved ? <SavingMessage /> : <EditInfoMessage />}
    </Form>
  );
}
