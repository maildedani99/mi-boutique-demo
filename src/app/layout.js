import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer";
import { workSans } from "./ui/fonts";
import { CartProvider } from "./lib/AppContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Usuriaga Collection",
  description: "Generated by create next app",
};

export default function RootLayout({ children, modals, products }) {
  return (
    <html lang="es">
      <head>
      <title>Usuriaga Collection</title>
      <meta name="description" content="Descripción de mi página de ejemplo." />
      <meta name="keywords" content="ejemplo, nextjs, seo" />
      <link rel="canonical" href="http://ejemplo.com/mi-pagina" />
      </head>
      <body
        className={`${inter.className} ${workSans.className} antialiased text-secondary `}
      >
        <CartProvider>
        <Navbar />
          {children}
          {modals}
          {products}
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
