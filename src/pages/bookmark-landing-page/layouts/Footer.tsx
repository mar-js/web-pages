import type { JSX } from "react";
import { ASSET_ROOT_BOOKMARK_LANDING_PAGE } from "../../../constants/data";

export const Footer = (): JSX.Element => (
	<footer className=" bg-[#252b46] py-8 text-white">
		<div className=" mx-auto flex w-[calc(100%_-_48px)] max-w-[1110px] flex-col items-center justify-between gap-6 md:flex-row">
			<a href="#top" aria-label="Bookmark home"><img className="w-[145px] brightness-0 invert" src={`${ASSET_ROOT_BOOKMARK_LANDING_PAGE}/logo-bookmark.svg`} alt="" /></a>
			<nav className="flex flex-col gap-5 text-[13px] uppercase tracking-[1px] md:flex-row" aria-label="Footer navigation"><a className="hover:text-[#fa5757]" href="#features">Features</a><a className="hover:text-[#fa5757]" href="#extensions">Pricing</a><a className="hover:text-[#fa5757]" href="#contact">Contact</a></nav>
			<div className=" flex gap-6">
				<a href="#contact" aria-label="Facebook"><img className="brightness-0 invert" src={`${ASSET_ROOT_BOOKMARK_LANDING_PAGE}/icon-facebook.svg`} alt="" /></a>
				<a href="#contact" aria-label="Twitter"><img className="brightness-0 invert" src={`${ASSET_ROOT_BOOKMARK_LANDING_PAGE}/icon-twitter.svg`} alt="" /></a>
			</div>
		</div>
	</footer>
);
