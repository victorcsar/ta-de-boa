import React from "react";

interface CustomButtonProps {
  label: string;
  color?: string;
}

export default function CustomButton({ label, color, ...props }: CustomButtonProps) {
  return (
    <button
      className={`text-white uppercase py-6 w-full rounded-2xl ${color}`}{...props}>
      {label}
    </button>
  );
}
