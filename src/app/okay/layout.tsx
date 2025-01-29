import type { Metadata } from "next";

import "../../styles/styles.scss";

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
        <div className="header-main container">
            <div className="header-row row">
                <div className="header-back-link col-lg-4">
                    <a href="/">Back</a> 
                </div>
                <div className="header-logo col-lg-4">
                    <a href="/">Larry A Lesley</a>
                </div>
                <div className="header-nav col-lg-4">
                    <ul>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="website-main">
            {children}
        </div>
        <div className="footer-main">

        </div>
      </body>
    </html>
  );
}
