import type { JSX } from "react";
import { Section } from "../layouts";

interface HomeProps {
	onExplore: () => void;
}

export const Home = ({ onExplore }: HomeProps): JSX.Element => (
	<Section className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-[1110px] flex-col items-center justify-center gap-20 px-6 pb-12 pt-16 text-center md:min-h-[calc(100vh-7rem)] md:flex-row md:items-end md:justify-between md:gap-8 md:px-10 md:pb-32 md:pt-20 md:text-left xl:min-h-[calc(100vh-10rem)] xl:pb-32">
		<div className="max-w-[445px]">
			<p className="font-['Barlow_Condensed',sans-serif] text-base uppercase tracking-[0.2em] text-[#d0d6f9] md:text-xl md:tracking-[0.22em]">
				So, you want to travel to
			</p>
			<h1 className="mt-6 font-['Bellefair',serif] text-[5rem] uppercase leading-none sm:text-[9.4rem]">
				Space
			</h1>
			<p className="mt-6 font-['Barlow',sans-serif] text-[15px] leading-[1.7] text-[#d0d6f9] md:text-base md:leading-[1.8]">
				Let’s face it; if you want to go to space, you might as well genuinely go to
				outer space and not hover kind of on the edge of it. Well sit back, and relax
				because we’ll give you a truly out of this world experience!
			</p>
		</div>
		<button
			type="button"
			onClick={onExplore}
			className="group flex h-36 w-36 shrink-0 items-center justify-center rounded-full bg-white font-['Bellefair',serif] text-xl uppercase tracking-[0.08em] text-[#0b0d17] transition-shadow hover:shadow-[0_0_0_55px_rgba(255,255,255,0.12)] sm:h-60 sm:w-60 sm:text-[2rem] md:mb-1"
		>
			Explore
		</button>
	</Section>
);
