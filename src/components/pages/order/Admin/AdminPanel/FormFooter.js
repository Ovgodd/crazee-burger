import React from "react";
import Button from "../../../../reusable-ui/Buttons/Button";
import ModifyMessage from "./ModifyMessage";
import SubmitMessage from "./SubmitMessage";
import { AiOutlineCheckCircle } from "react-icons/ai";
import styled from "styled-components";

export default function FormFooter({ onSubmit, isProductAdded, onEdit }) {
  // const addButton = (
  //   <Button variant="success" label="Ajouter un nouveau produit au menu" />
  // );

  // const editMessage = (
  //   <ModifyMessage
  //     label="Cliquer sur un produit du menu pour le modifier&nbsp;"
  //     underline="en temps réel"
  //   />
  // );
  // const submitMessage = (
  //   <SubmitMessage
  //     Icon={<AiOutlineCheckCircle className="icon" />}
  //     label="Ajouté avec succès !"
  //   />
  // );

  return (
    <FormFooterStyled>
      {onSubmit && (
        <Button variant="success" label="Ajouter un nouveau produit au menu" />
      )}
      {onEdit && (
        <ModifyMessage
          label="Cliquer sur un produit du menu pour le modifier&nbsp;"
          underline="en temps réel"
        />
      )}
      {isProductAdded && (
        <SubmitMessage
          Icon={<AiOutlineCheckCircle className="icon" />}
          label="Ajouté avec succès !"
        />
      )}
    </FormFooterStyled>
  );
}
const FormFooterStyled = styled.div`
  position: absolute;
  top: 145px;
  left: -55px;
  .icon {
    display: flex;
    align-items: center;
    width: 20px;
    height: 20px;
  }
`;
