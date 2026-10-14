import type { JSX } from "react";

export const Intro = (): JSX.Element => (
	<section
		className="flex flex-col justify-center border-b border-white/20 px-8 py-14 lg:border-b-0 lg:px-12 lg:py-16"
		aria-labelledby="grid-heading"
	>
		<h1
			id="grid-heading"
			className="mb-6 max-w-[540px] text-[clamp(42px,10.3vw,52px)] font-medium leading-[1.12] tracking-[-0.055em] md:text-[clamp(42px,5.5vw,54px)] lg:mb-[38px] lg:text-[clamp(44px,4.1vw,62px)]"
		>
			A classroom<br 			className="hidden lg:inline" /> for every
			child.
		</h1>
		<p className="max-w-[470px] text-[17px] leading-[1.72] text-white/80 lg:max-w-[425px] lg:text-[17px] lg:leading-[1.65]">
			We fund the schools, train the teachers, and measure what works — so every
			child we reach today becomes a graduate tomorrow.
		</p>
	</section>
);
