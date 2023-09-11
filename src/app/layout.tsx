import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { DrawerProvider } from "@/app/drawerContext";
import { Header } from "../components/navigation/header/Header";
import { Drawer } from "@/components/navigation/drawer/Drawer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Compleit case",
  description: "Made by Tony Karlsson",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DrawerProvider>
          <div className="flex mx-auto w-full">
            <Drawer />
            <main className="w-full">
              <Header />
              {children}
            </main>
          </div>
        </DrawerProvider>
      </body>
    </html>
  );
}
