import type { JSX } from "react";
import { ASSET_ROOT_BOOKMARK_LANDING_PAGE } from "../../../constants/data";

export const Hero = (): JSX.Element => (
	<section className="mx-auto grid w-[calc(100%_-_48px)] max-w-[1110px] grid-cols-1 items-center gap-8 pb-14 pt-5 sm:min-h-[330px] sm:grid-cols-2 sm:gap-12 sm:py-5" aria-labelledby="bm-hero-title">
		<div className="order-2 max-w-[480px] sm:order-1">
			<h1 id="bm-hero-title" className="mb-6 text-center text-[30px] font-medium leading-tight tracking-[-1px] sm:text-left sm:text-[46px]">A Simple Bookmark Manager</h1>
			<p className="mx-auto max-w-[440px] text-center leading-[1.65] text-[#9194a1] sm:mx-0 sm:text-left">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
			<div className="mt-6 flex justify-center gap-2 sm:justify-start sm:gap-4">
				<a className="rounded border-2 border-[#5267df] bg-[#5267df] px-3.5 py-3 text-xs font-medium text-white shadow-md hover:bg-white hover:text-[#5267df] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5267df] sm:px-5 sm:text-sm" href="#extensions">Get it on Chrome</a>
				<a className="rounded border-2 border-[#f7f7f7] bg-[#f7f7f7] px-3.5 py-3 text-xs font-medium text-[#5b5d69] shadow-md hover:border-[#5b5d69] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5b5d69] sm:px-5 sm:text-sm" href="#extensions">Get it on Firefox</a>
			</div>
		</div>
		<div className="relative order-1 mx-[-12px] mt-5 after:absolute after:right-[-5vw] after:top-1/4 after:-z-10 after:h-3/4 after:w-3/4 after:rounded-l-[160px] after:bg-[#5267df] sm:order-2 sm:mx-0 sm:mt-0">
			<img className="relative z-0 w-full" src={`${ASSET_ROOT_BOOKMARK_LANDING_PAGE}/illustration-hero.svg`} alt="A browser window showing an organized bookmark collection" />
		</div>
	</section>
);
