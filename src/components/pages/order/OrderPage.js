import React from "react";
import { Link } from "react-router-dom";
export default function OrderPage() {
  return (
    <div>
      <h1>Bonjour prénom</h1>
      <br />
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
}
