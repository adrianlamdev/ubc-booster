import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
// import DisclaimerModal from "../components/disclamer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UBC Booster",
  description: "The one-stop course essentials for UBC.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* use state to toggle */}
        {/* <DisclaimerModal /> */}
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
