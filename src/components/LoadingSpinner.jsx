// components/LoadingSpinner.jsx
import React from "react";
import { BarLoader } from "react-spinners";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen">
      <BarLoader size={15} margin={2} color={"#4A90E2"} loading={true} />
    </div>
  );
}
