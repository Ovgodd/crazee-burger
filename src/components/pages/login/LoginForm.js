import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isValidName } from "./utils";
export default function LoginForm() {
  // state(état, données)
  const [inputName, setInputName] = useState("");
  const navigate = useNavigate();

  // comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputName("");
    navigate(`order/${inputName}`);
  };

  const handleChange = (event) => {
    const inputUser = event.target.value;
    if (inputUser === "" || isValidName.test(inputUser))
      setInputName(inputUser);
  };

  // affichage
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous</h1>
      <br />
      <h2>Connectez-vous</h2>
      <input
        type="text"
        value={inputName}
        placeholder="Entrez votre prénom..."
        onChange={handleChange}
        required
      />
      <button>Accédez à votre espace</button>
    </form>
  );
}
