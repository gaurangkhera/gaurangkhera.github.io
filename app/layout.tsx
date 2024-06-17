import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/sidebar";
import { Manrope } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import { cn } from "@/lib/utils";
import { BackgroundBeams } from "@/components/background-beams";
import ConvexClientProvider from "@/components/convex-client-provider";

export const metadata: Metadata = {
  title: "hey there.",
  description: "hi, i'm Gaurang. i'm 15 and enjoy programming, basketball and running. i've worked as a SWE and DS for the government of India as well as a startup. i'm currently working on a few projects in fintech.",
  keywords: "Gaurang Khera, Student Software Engineer, Web Development, AI, Machine Learning, Blockchain, Physics, Math, Coding, JavaScript, TypeScript, Python, React, Next.js, TensorFlow, PyTorch",
}

const font = Manrope({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ConvexClientProvider>
        <body className={cn(GeistSans.className, "transform-gpu h-screen")}>
          <Navbar />{" "}
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>{" "}
          {children} <BackgroundBeams />
        </body>
      </ConvexClientProvider>
    </html>
  );
}
