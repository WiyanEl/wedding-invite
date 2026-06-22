import type { Metadata } from "next";
import React from "react";
import './style.css';

export const metadata: Metadata = {
  title: "Steven & Bella",
  description: "Wedding Invitation of Steven Theodorus Dirjayanto and Bella Anesia",
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