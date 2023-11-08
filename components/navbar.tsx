import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarItem,
	NavbarBrand,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { ThemeSwitch } from "@/components/theme-switch";
import { HeartFilledIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { Mail, Phone } from "lucide-react";

export const Navbar = () => {


	return (
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<ul className="hidden lg:flex gap-4 justify-start ml-2">
					<NavbarItem>
						<NextLink href="/">Home</NextLink>
					</NavbarItem>
					<NavbarItem>
						<NextLink href="/blog">Blog</NextLink>
					</NavbarItem>
					<NavbarItem>
						<NextLink href="/projects">Projects</NextLink>
					</NavbarItem>
				</ul>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem>
					<ThemeSwitch />
				</NavbarItem>
				<NavbarItem>
					<Button
						isExternal
						as={Link}
						className="text-sm font-normal text-default-600 bg-default-100"
						href={'/contact'}
						startContent={<Mail className="w-5 h-5" />}
						variant="flat"
					>
						Contact
					</Button>
				</NavbarItem>
			</NavbarContent>
		</NextUINavbar>
	);
};