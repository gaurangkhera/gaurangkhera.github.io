"use client"
import { cn } from "@/lib/utils";
import {
  Home,
  Layers,
  Lightbulb,
  User2,
} from "lucide-react";
import { buttonVariants } from "./ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const items = [
    { name: "Home", icon: <Home /> , link: "/"},
    { name: "About", icon: <User2 />,link: "/about" },
    { name: "Skills", icon: <Lightbulb />, link: "/skills" },
    { name: "Projects", icon: <Layers />, link: "/projects" },
  ];

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`h-fit w-fit relative top-5 right-0 left-0  m-auto border border-black rounded-full  p-2   flex-row gap-3 transition-all bg-gray-900 z-10 hover:translate-y-0.5 hover:scale-100 max-sm:gap-1 ${scrolling ? "hidden":"flex"}`}>
      {items.map((itm) => {
        return (
          <TooltipProvider key={itm.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={itm.link}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "rounded-full",
                    pathname === itm.link && "bg-gray-800"
                  )}
                >
                  {itm.icon}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{itm.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
      </div>
  );
};

export default Navbar;