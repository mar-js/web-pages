import type { JSX } from "react";
import { Image } from "./Image";

export const Hero = (): JSX.Element => (
	<article className="flex flex-col justify-center items-center gap-10 text-white text-center">
		<Image
			className="min-w-60"
			path="fylo-dark-landing-page/illustration-intro.png"
			alt="Hero"
		/>
		<h2 className="font-semibold text-4xl">
			All your files in one secure location, accessible anywhere.
		</h2>
		<p className="opacity-60 text-xl">
			Fylo stores all your most important files in one secure locaiton. Access
			them wherever you need, share and collaborat with friends family, and
			co-workers.
		</p>
		<a
			className="min-w-72 text-lg py-4 bg-linear-to-r from-fylo-dark-teal-200 to-fylo-dark-cyan-500 rounded-full hover:brightness-110"
			href="./pages/fylo-dark-lading-page"
			target="_self"
		>
			Get Started
		</a>
	</article>
);
