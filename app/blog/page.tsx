import { subtitle, title } from "@/components/primitives";

export default function BlogPage() {
	return (
		<div>
			<h1 className={title()}>Blog</h1>
			<p className={subtitle()}>Stay tuned :D</p>
		</div>
	);
}
