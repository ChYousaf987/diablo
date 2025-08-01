// src/app/layout.js
import { Roboto as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Provider from "@/components/Provider";
import Header from "@/components/layout/root/Header";
import Footer from "@/components/layout/root/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Diablo",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content={metadata.description} />
        <title>{metadata.title}</title>
        <link rel="icon" href="/logo.webp" />
      </head>
      <body
        className={cn(
          "min-h-screen font-sans antialiased bg-[#15161a]",
          fontSans.variable
        )}
      >
        <Provider>
          <div className="min-h-screen mx-auto flex flex-start flex-col bg-[#15161a]">
            <Header />
            <div className="grow">{children}</div>
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
