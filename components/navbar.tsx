"use client";

import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarItem,
	NavbarBrand,
	Button,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { ThemeSwitch } from "@/components/theme-switch";
import NextLink from "next/link";
import { Mail } from "lucide-react";
import { usePathname } from "next/navigation";

export const Navbar = () => {
	const pathname = usePathname();
	const getLinkClass = (path: string) => {
        return pathname === path ? 'underline underline-offset-8' : '';
    }

	return (
		<NextUINavbar isBordered>
			<NavbarContent className="sm:hidden" justify="start">
				<NavbarMenuToggle />
			</NavbarContent>
			<NavbarContent className="hidden sm:flex gap-4 clash font-medium" justify="center">
				<NavbarBrand>
					<NextLink href="/" className={getLinkClass('/')}>Home</NextLink>
				</NavbarBrand>
				<NavbarItem>
					<NextLink href="/blog" className={getLinkClass('/blog')}>Blog</NextLink>
				</NavbarItem>
				<NavbarItem>
					<NextLink href="/projects" className={getLinkClass('/projects')}>Projects</NextLink>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent justify="end">
				<NavbarItem>
					<ThemeSwitch />
				</NavbarItem>
				<NavbarItem>
					<Button
						as={Link}
						className="text-sm clash font-medium text-default-600 bg-default-100"
						href={'/contact'}
						startContent={<Mail className="w-5 h-5" />}
						variant="flat"
					>
						Contact
					</Button>
				</NavbarItem>
			</NavbarContent>

			<NavbarMenu>
				<NavbarMenuItem>
					<Link
						className="w-full"
						color="foreground"
						href="/"
						size="lg"
					>
						Home
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link
						className="w-full"
						color="foreground"
						href="/blog"
						size="lg"
					>
						Blog
					</Link>
				</NavbarMenuItem>
				<NavbarMenuItem>
					<Link
						className="w-full"
						color="foreground"
						href="/projects"
						size="lg"
					>
						Projects
					</Link>
				</NavbarMenuItem>
			</NavbarMenu>
		</NextUINavbar>
	);
};