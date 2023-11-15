"use client";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { ArrowDown, ArrowRight } from "lucide-react";
import Typed from "typed.js";
import React, { useEffect } from "react";
import { Progress } from "@nextui-org/progress";
import clsx from "clsx";

export default function Home() {  
	const typedRef = React.useRef(null);

	React.useEffect(() => {
		const typed = new Typed(typedRef.current, {
		  strings: ['a full-stack web developer.', 'also a math enthusiast.', 'also a student.'],
		  typeSpeed: 75,
		  backSpeed: 50,
      loop: true,
		});
	
		return () => {
		  // Destroy Typed instance during cleanup to stop animation
		  typed.destroy();
		};
	  }, []);

	return (
	<>
		<section className="flex flex-col mt-32 items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={clsx(title(), 'clash')}>I&apos;m&nbsp;</h1>
				<h1 className={clsx(title({ color: "green" }), 'clash')} ref={typedRef}></h1>
				<h2 className="mt-4 text-md">
				Hi, I&apos;m Gaurang! I&apos;m a highschool freshman who loves to code. I&apos;m a full-stack web developer, and I&apos;m currently working on a few projects. I&apos;m also a math enthusiast, and I also like playing the Sitar, a traditional Indian instrument.
				</h2>
			</div>

			<div className="flex gap-3">
				<Link
					href={'#introduction'}
					className={buttonStyles({ color: "success", radius: "full", variant: "shadow" })}
				>
					<ArrowDown className="w-4 h-4" />
				</Link>
			</div>
		</section>

		<section id="introduction" className="mt-72 flex flex-col items-center space-y-4">
			<h1 className="text-4xl font-bold mb-4 text-center">Introduction</h1>
			<p className="text-lg text-center">I&apos;m a budding full-stack web developer and machine learning engineer, passionate about creating impactful and intuitive digital experiences. My enthusiasm for technology, combined with a thirst for knowledge, drives my constant exploration and learning in various fields. From understanding complex mathematical concepts to implementing them in algorithms and code, I find joy in the challenges that each project presents.</p>

			<div className="p-4 w-3/4">
      <h2 className="text-2xl font-bold mb-4">Technologies I&apos;ve worked with</h2>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Web Development</h3>
        <div className="flex items-center mb-4">
			<p className="w-1/4">Flask</p>
		<div className="w-3/4 bg-gray-300 h-4 rounded-full overflow-hidden">
            <div className="bg-green-500 h-4" style={{ width: '100%' }}></div>
          </div>
        </div>
        <div className="flex items-center mb-4">
			<p className="w-1/4">NextJS</p>
		<div className="w-3/4 bg-gray-300 h-4 rounded-full overflow-hidden">
            <div className="bg-green-500 h-4" style={{ width: '94.5%' }}></div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Machine Learning</h3>
        <div className="flex items-center mb-4">
          <p className="w-1/4">OpenAI</p>
          <div className="w-3/4 bg-gray-300 h-4 rounded-full overflow-hidden">
            <div className="bg-green-500 h-4" style={{ width: '97.1%' }}></div>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <p className="w-1/4">TensorFlow</p>
          <div className="w-3/4 bg-gray-300 h-4 rounded-full overflow-hidden">
            <div className="bg-green-500 h-4" style={{ width: '95.1%' }}></div>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <p className="w-1/4">SKlearn</p>
          <div className="w-3/4 bg-gray-300 h-4 rounded-full overflow-hidden">
            <div className="bg-green-500 h-4" style={{ width: '91%' }}></div>
          </div>
        </div>
        {/* Add other machine learning technologies similarly */}
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Hardware & Miscellaneous</h3>
        <div className="flex items-center mb-4">
          <p className="w-1/4">Arduino UNO & Nano</p>
          <div className="w-3/4 bg-gray-300 h-4 rounded-full overflow-hidden">
            <div className="bg-green-500 h-4" style={{ width: '84.5%' }}></div>
          </div>
        </div>
        {/* Add other hardware and miscellaneous technologies similarly */}
      </div>
    </div>
		</section>
</>
		
	);
}
