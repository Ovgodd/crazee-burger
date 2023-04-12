import React from "react";
import Button from "../../../../reusable-ui/Buttons/Button";
import ModifyMessage from "./ModifyMessage";
import SubmitMessage from "./SubmitMessage";

export default function FormFooter({ onSubmit, isProductAdded, onEdit }) {
  const addButton = (
    <Button variant="success" label="Ajouter un nouveau produit au menu" />
  );

  const editMessage = <ModifyMessage />;

  return (
    <div>
      {onSubmit && addButton}
      {onEdit && editMessage}
      {isProductAdded && <SubmitMessage />}
    </div>
  );
}
