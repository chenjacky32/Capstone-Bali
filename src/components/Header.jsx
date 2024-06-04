import React from "react";
import { Link } from "react-router-dom";

export default function Header({ title, linkHref, linkTitle }) {
  return (
    <div className="flex items-center justify-between p-4 mx-auto max-w-screen-2xl ">
      <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          to={linkHref}
          className="text-sm underline transition-all md:text-xl text-color-primary hover:text-color-accent"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
}
