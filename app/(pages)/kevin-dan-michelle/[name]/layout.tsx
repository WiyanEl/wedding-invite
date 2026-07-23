import type { Metadata } from "next";
import React from "react";
import './style.css';

export const metadata: Metadata = {
  title: "Kecin & Michelle",
  description: "Wedding Invitation of dr. Kevin Axel Laurent Susanto and  dr. Michelle Cannissa Hendrawan",
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