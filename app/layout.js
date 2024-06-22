import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import "@/public/script.js";

const montserrat = Montserrat({ weight: ['500', '600'], subsets: ["latin"] });
const poppins = Poppins({ weight: ['400', '500'], display: 'swap', subsets: ["latin"] });

export const metadata = {
  title: "Royal Heritage Trips",
  description: "Royal Heritage Trips",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={[montserrat.className, poppins.className]}>{children}</body>
    </html>
  );
}
