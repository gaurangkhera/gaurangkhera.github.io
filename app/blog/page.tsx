import { subtitle, title } from "@/components/primitives";
import clsx from "clsx";

export default function BlogPage() {
	return (
		<div>
			<h1 className={clsx(title(), 'clash')}>Blog</h1>
			<p className={subtitle()}>Stay tuned :D</p>
		</div>
	);
}
