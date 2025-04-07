import type { Metadata } from "next";
import "../globals.css";
import NavbarOther from "@/components/Navbar/NavbarOther";

export const metadata: Metadata = {
  title: "Anglicotech",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavbarOther />
      {children}
    </>
  );
}
