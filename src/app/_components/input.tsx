import React from "react";

export function Input({
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="rounded-md border border-gray-300 p-2 text-black"
      {...props}
    />
  );
}
