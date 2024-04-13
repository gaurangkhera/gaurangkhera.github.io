import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/sidebar";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";
import { BackgroundBeams } from "@/components/background-beams";
import ConvexClientProvider from "@/components/convex-client-provider";

export const metadata: Metadata = {
  title: "hi, I'm Gaurang.",
  description: "I'm a 15-year-old student and software engineer based in India. I enjoy playing basketball, math and coding. I'm currently working on a few projects, including this website. I'm currently studying in Grade 10 at Sanskriti School, New Delhi. I'm a hard-working student and have a keen interest in mathematics, physics and computer science. I've been securing top grades in my class since I was 10, and I'm always eager to learn new things."
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
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>{" "}
          {children} <BackgroundBeams />
        </body>
      </ConvexClientProvider>
    </html>
  );
}
