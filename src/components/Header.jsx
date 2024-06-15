import React from "react";
import { Link } from "react-router-dom";

export default function Header({ title }) {
  return (
    <div className="flex items-center justify-between p-4 mx-auto max-w-screen-2xl ">
      <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
    </div>
  );
}
