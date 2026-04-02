import type { Metadata } from "next";
import React from "react";
import './style.css';

export const metadata: Metadata = {
  title: "Cornel & Tiara",
  description: "Wedding Invitation of Cornelius Kurnia Yonathan and Tiara Aprilia Purnomo",
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