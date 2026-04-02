import type { Metadata } from "next";
import React from "react";
import './style.css';

export const metadata: Metadata = {
  title: "Wei Liang & Cecillia",
  description: "Wedding Invitation of Tan Wei Liang and Cecilia Joicelyn Widjojo",
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