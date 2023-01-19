import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { useParams } from "react-router-dom";

export default function RightSide() {
  const { username } = useParams();
  return <div>RightSide</div>;
}
