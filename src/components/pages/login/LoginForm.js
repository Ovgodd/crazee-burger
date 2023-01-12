import React, { useState } from "react";
import { isValidName } from "./utils";
export default function LoginForm() {
  // state(état, données)
  const [name, setName] = useState("");

  // comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    setName("");
  };

  const handleChange = (event) => {
    const inputUser = event.target.value;
    if (inputUser === "" || isValidName.test(inputUser)) setName(inputUser);
  };

  // affichage
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        type="text"
        value={name}
        placeholder="Entrez votre prénom..."
        onChange={handleChange}
        required
      />
      <button>Accédez à votre espace</button>
    </form>
  );
}
