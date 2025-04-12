import { Inter } from "next/font/google";
import "./globals.css";
import Container from "@/components/container";
import Header from "@/components/header";
import Footer from "@/components/footer";

const interFont = Inter({subsets:['latin']});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${interFont.className} antialiased bg-stone-200`}
      >
        <Container>
          <Header />
          {children}
          {/* <Footer /> */}
        </Container>
      </body>
    </html>
  );
}
