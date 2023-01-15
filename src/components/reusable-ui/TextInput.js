import React from "react";

export default function TextInput(props) {
  return (
    <input
      type="text"
      value={props.inputName}
      placeholder="Entrez votre prénom"
      onChange={props.onInputChange}
      required
    />
  );
}
