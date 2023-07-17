import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

import MyToast from "./components/child/toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <MyToast />
        <Footer />
      </body>
    </html>
  );
}
