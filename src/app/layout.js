import Navbar from "@/components/Home/Navbar";
import "./globals.css";
import { CartContextProvider } from "@/contextProvider/cartContextProvider";
import { LoginContextProvider } from "@/contextProvider/LoginContextProvider";
import { ThemeContextProvider } from "@/contextProvider/ThemeContextProvider";

export const metadata = {
  title: "E-cart",
  description: "Get your shooping items",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>
          <LoginContextProvider>
            <CartContextProvider>
              <Navbar/>
              <div className="w-11/12 mx-auto mt-52 md:mt-32">
                {children}
              </div>
            </CartContextProvider>
          </LoginContextProvider>
        </ThemeContextProvider>
        <div id="modal-root" />
      </body>
    </html>
  );
}
