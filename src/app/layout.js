import Navbar from "@/components/Home/Navbar";
import "./globals.css";
import { CartContextProvider } from "@/contextProvider/cartContextProvider";
import { LoginContextProvider } from "@/contextProvider/LoginContextProvider";

export const metadata = {
  title: "E-cart",
  description: "Get your shooping items",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <LoginContextProvider>
          <CartContextProvider>
            <Navbar/>
            <div className="w-11/12 mx-auto mt-32">
              {children}
            </div>
          </CartContextProvider>
        </LoginContextProvider>
        <div id="modal-root" />
      </body>
    </html>
  );
}
