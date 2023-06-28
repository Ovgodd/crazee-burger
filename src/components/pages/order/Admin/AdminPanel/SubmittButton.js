import React from "react";
import Button from "../../../../reusable-ui/Buttons/Button";
import SubmitMessage from "./EditPanel/Messages/SubmitMessage";

export default function SubmittButton({ isSubmitted }) {
  return (
    <>
      <Button variant="success" label="Ajouter un nouveau produit au menu" />
      <span>salut</span>
      {isSubmitted && <SubmitMessage />}
    </>
  );
}
