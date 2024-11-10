import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import {Inter} from 'next/font/google'
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
import { Toaster } from "sonner";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Zcrum",
  description: "Project Management App",
};

export default function RootLayout({ children }) {
  
  return (
    <ClerkProvider
    
    appearance={{
      baseTheme:shadesOfPurple,
    }}
    >
    <html lang="en">
      <body
        className={`${inter.className} dotted-background`}>
          <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
                        <main className="min-h-screen">{children}</main>
                        <Toaster richColors />
          </ThemeProvider>
        <footer className="bg-gray-900 py-12">
          <div className="container mx-auto px-4 text-center text-gray-200"><p>Made by KG Code</p></div>
          </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
