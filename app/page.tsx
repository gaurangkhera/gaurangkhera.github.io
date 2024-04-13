
import Heading from "@/components/heading";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="">
        <div className="h-[40rem] w-full rounded-md relative flex flex-col items-center justify-center antialiased">
          <div className="max-w-2xl mx-auto p-4">
            <Heading className="text-center text-3xl md:text-6xl">
              hi, I&apos;m Gaurang.
            </Heading>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
              I&apos;m a student and software engineer based in India. I enjoy playing basketball, math and coding. I&apos;m currently working on a few projects, including this website.
            </p>
          </div>
          <Link href="/about">
            <a className={cn(buttonVariants({ 
              size: "lg"
            }), "relative group z-10 gap-2")}>
              Get to know me <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all" />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}