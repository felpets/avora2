import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ávora Assessoria | Revisão de Juros Abusivos",
  description: "Especialistas em revisão judicial de contratos de financiamento. Identifique juros abusivos e recupere seu dinheiro.",
  keywords: "revisão de contrato, juros abusivos, financiamento, assessoria jurídica, recuperação de valores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-gray-950 text-white`}>{children}</body>
    </html>
  );
}
