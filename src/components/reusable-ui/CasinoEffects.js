import React from "react";

export default function CasinoEffects({ count, className }) {
  return (
    <div>
      <span className={className}>{count}</span>
    </div>
  );
}
