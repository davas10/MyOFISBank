//export const dynamic = 'force-dynamic'

import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";


//TPOS DE LETRA A UTILIZAR
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
})


//Información principal y datos del proyecto (Pestaña internet)
export const metadata: Metadata = {
  title: "MyOFIS Bank",
  description: "MyOFIS Bank is a modern banking platform for everyone.",
  icons: {
    icon: '/icons/logo.png'
  }
};


//Inicio del proyecto "ROOT" donde le indicamos los dos tipos de letra que queremos utilizar.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
