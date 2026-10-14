import type { JSX } from "react";
import { ASSET_ROOT_URL_SHORTENING_API } from "../../../constants/data";

export const Hero = (): JSX.Element => (
	<section className="mx-auto flex max-w-[1110px] flex-col-reverse items-center gap-7 px-6 pb-28 pt-4 text-center md:flex-row md:gap-8 md:px-10 md:pb-36 md:pt-10 md:text-left">
		<div className="md:w-[52%] md:shrink-0">
			<h1 className="text-[2.55rem] font-bold leading-[1.15] tracking-[-1.5px] md:text-[3.5rem] xl:text-[4.5rem]">
				More than just shorter links
			</h1>
			<p className="mt-3 text-base leading-[1.65] text-[#9e9aa7] md:max-w-[470px] md:text-xl">
				Build your brand’s recognition and get detailed insights on how your links
				are performing.
			</p>
			<a
				href="#shorten"
				className="mt-7 inline-flex rounded-full bg-[#2acfcf] px-8 py-3 font-bold text-white transition-colors hover:bg-[#9be3e2]"
			>
				Get Started
			</a>
		</div>
		<div className="relative -mr-16 w-[calc(100%+64px)] max-w-[700px] md:mr-[-12vw] md:w-[58vw] md:max-w-none">
			<img
				src={`${ASSET_ROOT_URL_SHORTENING_API}/illustration-working.svg`}
				alt="Person working at a computer"
				className="w-full"
			/>
		</div>
	</section>
);
