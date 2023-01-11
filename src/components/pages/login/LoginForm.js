import React, { useState } from "react";

export default function LoginForm() {
  // state(état, données)
  const [name, setName] = useState("");
  // comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("bonjour " + name);
    setName("");
  };
  const handleChange = (event) => {
    const regex = /^[A-Za-z]+$/;
    if (event.target.value === "" || regex.test(event.target.value)) {
      setName(event.target.value);
    }
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
