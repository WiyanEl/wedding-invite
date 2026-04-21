import type { Metadata } from "next";
import React from "react";
import './style.css';

export const metadata: Metadata = {
  title: "Ryan & Inggrid",
  description: "Wedding Invitation of Ryan Rahmadi and Beatrix Levina Inggrid",
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