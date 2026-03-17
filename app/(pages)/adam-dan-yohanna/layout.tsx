import type { Metadata } from "next";
import React from "react";
import './style.css';

export const metadata: Metadata = {
  title: "Adam & Yohanna",
  description: "Wedding Invitation of Adam Hardiman and Yohanna Yulianty Usman",
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