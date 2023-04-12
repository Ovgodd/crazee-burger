import React from "react";
import Button from "../../../../reusable-ui/Buttons/Button";
import ModifyMessage from "./ModifyMessage";
import SubmitMessage from "./SubmitMessage";

export default function FormFooter({ onSubmit, isProductAdded }) {
  const formButton = (
    <Button variant="success" label="Ajouter un nouveau produit au menu" />
  );

  const formMessage = <ModifyMessage />;
  return (
    <div>
      {onSubmit ? formButton : formMessage}
      {isProductAdded && <SubmitMessage />}
    </div>
  );
}
