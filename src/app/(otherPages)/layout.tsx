import type { Metadata } from "next";
import "../globals.css";
import NavbarOther from "@/components/Navbar/NavbarOther";

// Remove metadata export to prevent conflicts with child pages
// export const metadata: Metadata = {
//   title: "Anglicotech",
//   description: "",
// };

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
