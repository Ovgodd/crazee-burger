import React from "react";
import { Link, useParams } from "react-router-dom";
export default function OrderPage() {
  //states
  const { username } = useParams();

  //comportements

  //affichage
  return (
    <div>
      <h1>Bonjour {username}</h1>
      <br />
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
}
