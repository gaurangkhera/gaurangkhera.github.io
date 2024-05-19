import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/sidebar";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import { BackgroundBeams } from "@/components/background-beams";
import ConvexClientProvider from "@/components/convex-client-provider";

export const metadata: Metadata = {
  title: "Gaurang | 15-Year-Old Student & Software Engineer",
  description: "Meet Gaurang, a 15-year-old student and software engineer from India. Passionate about basketball, math, and coding, he's currently working on various projects, including this website. Gaurang excels academically, maintaining top grades in Grade 10 at Sanskriti School, New Delhi. With a keen interest in mathematics, physics, and computer science, he's always eager to learn and grow.",
  keywords: "blockchain physics math gaurang khera student software sanskriti school basketball lebron james steph curry nike adidas india new delhi government of india startups narendra modi coding programming web development software engineering machine learning artificial intelligence ai deep learning neural networks tensorflow pytorch react nextjs javascript typescript python c++ c# unity game development web3 blockchain ethereum convex finance convex finance",
}


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
