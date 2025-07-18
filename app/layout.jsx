import "./globals.css";
import {JetBrains_Mono} from "next/font/google";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import Image from "next/image";

const jetBrainsMono=JetBrains_Mono({
  subsets:['latin'],
  weight:['100','200','300','400','500','600','700','800'],
  variable: "--font-jetBrainsMono",
  
});

export const metadata = {
  title: "Vanmali",
  icons: {
    icon: "/assets/favicon.ico",  // reference to the icon path
  },
  description: "Reactjs,Full Stack Development,Frontend ,Backend,Website Development,App Development,Angular Js Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon link */}       
        <link rel="icon" href="/assets/favicon.ico" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
      </head>
      <body
        className={`${jetBrainsMono.variable}`}
      >
        <Header/>
        
        <StairTransition/>
        <PageTransition>
        {children}
        </PageTransition>
      </body>
    </html>
  );
}
