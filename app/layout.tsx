import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SideNavbar from "./lib/components/navbar/SideNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayush Mondal Personal Repository",
  description:
    "Hello and welcome! I'm Ayush Mondal, a dynamic professional at the intersection of web development, artificial intelligence, and blockchain technology. Embark on a journey through my portfolio to witness the convergence of cutting-edge design, intelligent algorithms, and decentralized solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="public/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="public/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Ayush Mondal Repository</title>
      </head>
      <body className={inter.className}>
        <div className="md:flex w-full h-full bg-neutral-800">
          <section className="md:basis-1/3">
            <SideNavbar />
          </section>
          <section className="md:basis-2/3">
            <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-backup">
              {children}
            </main>
          </section>
        </div>
      </body>
    </html>
  );
}
