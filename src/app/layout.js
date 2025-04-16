import "./globals.css";

export const metadata = {
  title: "E-cart",
  description: "Get your shooping items",
};

export default function RootLayout({Navbar,Products }) {
  return (
    <html lang="en">
      <body>
        {Navbar}
        {Products}
      </body>
    </html>
  );
}
