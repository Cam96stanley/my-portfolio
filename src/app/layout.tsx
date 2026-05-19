import type { Metadata } from "next";
import { JetBrains_Mono, Matangi } from "next/font/google";
import "../ui/styles/globals.css";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import Footer from "@/ui/components/Footer";
import Header from "@/ui/components/Header";

const matangi = Matangi({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Cameron Stanley | Web Development",
  description:
    "Full stack developer specializing in building scalable web and mobile applications. Available for freelance and full-time opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        "font-sans",
        matangi.variable,
        jetbrainsMono.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main>{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
