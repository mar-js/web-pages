import type { JSX } from "react";
import { ASSET_ROOT_BOOKMARK_LANDING_PAGE } from "../../../constants/data";

export const Hero = (): JSX.Element => (
	<section className="bm-wrap mx-auto grid min-h-[500px] w-[calc(100%_-_48px)] max-w-[1110px] grid-cols-1 items-center gap-9 py-6 sm:grid-cols-2 sm:pb-[50px]" aria-labelledby="bm-hero-title">
		<div className="bm-hero-copy max-w-[480px]">
			<h1 id="bm-hero-title" className="mb-6 text-[30px] font-medium leading-tight tracking-[-1px] sm:text-[46px]">A Simple Bookmark Manager</h1>
			<p className="max-w-[440px] leading-[1.65] text-[#9194a1]">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
			<div className="bm-actions mt-6 flex gap-2 sm:gap-4">
				<a className="bm-button bm-button-blue rounded border-2 border-[#5267df] bg-[#5267df] px-3.5 py-3 text-xs font-medium text-white shadow-md hover:bg-white hover:text-[#5267df] sm:px-5 sm:text-sm" href="#extensions">Get it on Chrome</a>
				<a className="bm-button bm-button-soft rounded border-2 border-[#f7f7f7] bg-[#f7f7f7] px-3.5 py-3 text-xs font-medium text-[#5b5d69] shadow-md hover:border-[#5b5d69] hover:bg-white sm:px-5 sm:text-sm" href="#extensions">Get it on Firefox</a>
			</div>
		</div>
		<div className="bm-hero-art relative after:absolute after:right-[-5vw] after:top-1/4 after:-z-10 after:h-3/4 after:w-3/4 after:rounded-l-[160px] after:bg-[#5267df]">
			<img src={`${ASSET_ROOT_BOOKMARK_LANDING_PAGE}/illustration-hero.svg`} alt="A browser window showing an organized bookmark collection" />
		</div>
	</section>
);
