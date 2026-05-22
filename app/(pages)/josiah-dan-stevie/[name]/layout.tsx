import type { Metadata } from "next";
import React from "react";
import './style.css';

export const metadata: Metadata = {
  title: "Josiah & Stevie",
  description: "Wedding Invitation of Josiah Mendes and Stevie Dirjayanto",
};

export default function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  )
}