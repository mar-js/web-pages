import type { JSX } from "react";
import { ASSET_ROOT_BOOKMARK_LANDING_PAGE } from "../../../constants/data";

export const Footer = (): JSX.Element => (
	<footer className="bm-footer bg-[#252b46] py-8 text-white">
		<div className="bm-wrap mx-auto flex w-[calc(100%_-_48px)] max-w-[1110px] flex-col items-center justify-between gap-6 md:flex-row">
			<a href="#top" aria-label="Bookmark home"><img className="bm-footer-logo" src={`${ASSET_ROOT_BOOKMARK_LANDING_PAGE}/logo-bookmark.svg`} alt="" /></a>
			<nav className="flex flex-col gap-5 text-[13px] uppercase tracking-[1px] md:flex-row" aria-label="Footer navigation"><a href="#features">Features</a><a href="#extensions">Pricing</a><a href="#contact">Contact</a></nav>
			<div className="bm-social flex gap-6">
				<a href="#contact" aria-label="Facebook"><img src={`${ASSET_ROOT_BOOKMARK_LANDING_PAGE}/icon-facebook.svg`} alt="" /></a>
				<a href="#contact" aria-label="Twitter"><img src={`${ASSET_ROOT_BOOKMARK_LANDING_PAGE}/icon-twitter.svg`} alt="" /></a>
			</div>
		</div>
	</footer>
);
