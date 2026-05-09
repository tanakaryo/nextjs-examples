import React from "react";
import "./globals.css";
export const metadata = {
  title: "app-router testing page.",
  description: "Next.js App Router manage each components.",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="ja">
      <body className="">{children}</body>
    </html>
  );
}