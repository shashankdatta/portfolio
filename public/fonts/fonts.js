import { Inter } from "next/font/google";
import localFont from "next/font/local";

// define your variable fonts
const inter = Inter({ subsets: ["latin"], fallback: ["sans-serif"] });
const myNTR = localFont({
  src: "./NTR-Regular.ttf",
  subsets: ["latin"],
  weight: "200",
  display: "swap",
  style: "normal",
  variable: "--font-ntr",
  preload: true,
  adjustFontFallback: "Arial",
});

export { inter, myNTR };
