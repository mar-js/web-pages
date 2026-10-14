import type { JSX } from "react";
import { ASSET_ROOT_CROWDFUNDING_PRODUCT_PAGE } from "../../../constants/data";

interface ProjectIntroProps {
	bookmarked: boolean;
	onBookmark: () => void;
	onBackProject: () => void;
}

export const ProjectIntro = ({ bookmarked, onBookmark, onBackProject }: ProjectIntroProps): JSX.Element => (
	<section className="cf-panel cf-project-intro relative mb-6 rounded-[9px] border border-[#f0f0f0] bg-white px-6 pb-10 pt-[53px] text-center md:px-11" aria-labelledby="cf-title">
		<img className="absolute left-1/2 top-[-28px] h-14 w-14 -translate-x-1/2" src={`${ASSET_ROOT_CROWDFUNDING_PRODUCT_PAGE}/logo-mastercraft.svg`} alt="" />
		<h1 className="mb-3.5 text-2xl font-bold leading-tight md:text-[28px]" id="cf-title">Mastercraft Bamboo Monitor Riser</h1>
		<p className="leading-[1.65] text-[#7a7a7a]">A beautiful &amp; handcrafted monitor stand to reduce neck and eye strain.</p>
		<div className="cf-project-actions mt-8 flex items-center justify-between gap-3">
			<button className="cf-button cf-back-button min-h-[52px] rounded-full border-0 bg-[#3cb4ac] px-7 py-4 text-sm font-bold text-white hover:bg-[#147b74]" type="button" onClick={onBackProject}>Back this project</button>
			<button
				className={`cf-bookmark flex h-[52px] items-center gap-3 overflow-hidden rounded-full border-0 p-0 font-bold ${bookmarked ? "bg-[#147b74] text-[#147b74]" : "bg-[#f4f4f4] text-[#7a7a7a]"}`}
				type="button"
				aria-pressed={bookmarked}
				onClick={onBookmark}
			>
				<span className="cf-bookmark-icon"><img className="block h-[52px] w-[52px]" src={`${ASSET_ROOT_CROWDFUNDING_PRODUCT_PAGE}/icon-bookmark.svg`} alt="" /></span>
				<span className="cf-bookmark-label hidden pr-5 sm:inline">{bookmarked ? "Bookmarked" : "Bookmark"}</span>
			</button>
		</div>
	</section>
);
