"use client";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className="rounded-full px-4 py-3 bg-blue-500 text-sm text-white">
      {children}
    </button>
  );
};