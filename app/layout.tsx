import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Igor Soares | Advogado em São João del-Rei - MG",
  description:
    "Conheça Igor Soares, advogado inscrito na OAB/MG 226.978, com endereço profissional em São João del-Rei. Acesse o perfil e os canais de contato.",
  keywords: [
    "Igor Soares advogado",
    "advogado em São João del-Rei",
    "advocacia em São João del-Rei",
    "OAB/MG 226.978",
    "orientação jurídica",
  ],
  openGraph: {
    title: "Igor Soares | Advogado",
    description:
      "Informações profissionais e contato com Igor Soares, advogado em São João del-Rei, Minas Gerais.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={bodyFont.variable + " " + displayFont.variable + " scroll-smooth"}>
      <body className="min-h-screen overflow-x-clip bg-ivory font-sans text-ink antialiased selection:bg-brand-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
