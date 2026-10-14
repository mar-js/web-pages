import type { JSX } from "react";
import { ASSET_ROOT_CROWDFUNDING_PRODUCT_PAGE } from "../../../constants/data";

interface ProjectIntroProps {
	bookmarked: boolean;
	onBookmark: () => void;
	onBackProject: () => void;
}

export const ProjectIntro = ({ bookmarked, onBookmark, onBackProject }: ProjectIntroProps): JSX.Element => (
	<section className="  relative mb-6 rounded-[9px] border border-[#f0f0f0] bg-white px-6 pb-10 pt-[53px] text-center md:px-11" aria-labelledby="cf-title">
		<img className="absolute left-1/2 top-[-28px] h-14 w-14 -translate-x-1/2" src={`${ASSET_ROOT_CROWDFUNDING_PRODUCT_PAGE}/logo-mastercraft.svg`} alt="" />
		<h1 className="mb-3.5 text-2xl font-bold leading-tight md:text-[28px]" id="cf-title">Mastercraft Bamboo Monitor Riser</h1>
		<p className="leading-[1.65] text-[#7a7a7a]">A beautiful &amp; handcrafted monitor stand to reduce neck and eye strain.</p>
		<div className=" mt-8 flex items-center justify-between gap-3">
			<button className="  min-h-[52px] rounded-full border-0 bg-[#3cb4ac] px-7 py-4 text-sm font-bold text-white hover:bg-[#147b74]" type="button" onClick={onBackProject}>Back this project</button>
			<button
				className={`flex h-[52px] items-center gap-3 overflow-hidden rounded-full border-0 bg-[#f4f4f4] p-0 font-bold transition-colors hover:text-[#147b74] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3cb4ac] ${bookmarked ? "text-[#147b74]" : "text-[#7a7a7a]"}`}
				type="button"
				aria-pressed={bookmarked}
				onClick={onBookmark}
			>
				<span className={`flex h-[52px] w-[52px] shrink-0 rounded-full ${bookmarked ? "bg-[#147b74]" : ""}`}>
					<img className={`block h-[52px] w-[52px] ${bookmarked ? "mix-blend-screen" : ""}`} src={`${ASSET_ROOT_CROWDFUNDING_PRODUCT_PAGE}/icon-bookmark.svg`} alt="" />
				</span>
				<span className="hidden pr-5 sm:inline">{bookmarked ? "Bookmarked" : "Bookmark"}</span>
			</button>
		</div>
	</section>
);
