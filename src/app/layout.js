import Navbar from "@/components/Home/Navbar";
import "./globals.css";
import { CartContextProvider } from "@/contextProvider/cartContextProvider";

export const metadata = {
  title: "E-cart",
  description: "Get your shooping items",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <CartContextProvider>
          <Navbar/>
          {children}
        </CartContextProvider>
      </body>
    </html>
  );
}
