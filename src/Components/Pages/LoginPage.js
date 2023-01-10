import { useState } from "react";

export default function LoginPage() {
  // state(état, données)
  const [name, setName] = useState("");
  // comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("bonjour " + name);
    console.log("nom apres saisie " + name);

    setName("");
  };
  const handleChange = (event) => {
    setName(event.target.value);
    console.log(name);
  };
  return (
    <div>
      <h1>Bienvenue chez nous</h1>
      <br />
      <h2>Connectez-vous</h2>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Entrez votre prénom..."
          onChange={handleChange}
          required
        />
        <button>Accédez à votre espace</button>
      </form>
    </div>
  );
}
