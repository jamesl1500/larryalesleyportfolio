import type { Metadata } from "next";

import "../styles/styles.scss";

export const metadata: Metadata = {
  title: "Larry A Lesley Portfolio",
  description: "Portfolio Website for Larry A Lesley",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
