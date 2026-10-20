import { type JSX, useEffect, useState } from "react";
import { ASSET_ROOT_BOOKMARK_LANDING_PAGE } from "../../../constants/data";

export const Header = (): JSX.Element => {
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const closeMenu = () => setMenuOpen(false);
		window.addEventListener("hashchange", closeMenu);
		return () => window.removeEventListener("hashchange", closeMenu);
	}, []);

	return (
		<header className="relative z-30 mx-auto flex h-16 w-[calc(100%_-_48px)] max-w-[1110px] items-center justify-between sm:h-20">
			<a className="relative z-30" href="#top" aria-label="Bookmark home">
				<img
					className={menuOpen ? "brightness-0 invert" : ""}
					src={`${ASSET_ROOT_BOOKMARK_LANDING_PAGE}/logo-bookmark.svg`}
					alt="Bookmark"
				/>
			</a>
			<button
				className="relative z-30 rounded border-0 bg-transparent p-2 md:hidden"
				type="button"
				aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
				aria-expanded={menuOpen}
				aria-controls="bookmark-navigation"
				onClick={() => setMenuOpen((open) => !open)}
			>
				<img
					className={menuOpen ? "brightness-0 invert" : ""}
					src={`${ASSET_ROOT_BOOKMARK_LANDING_PAGE}/${menuOpen ? "icon-close.svg" : "icon-hamburger.svg"}`}
					alt=""
				/>
			</button>
			<nav
				id="bookmark-navigation"
				className={`${menuOpen ? "fixed inset-0 flex flex-col bg-[#252b46]/95 px-8 pt-36 text-white" : "hidden"} z-20 items-stretch text-center text-[18px] uppercase tracking-[3px] md:static md:flex md:flex-row md:items-center md:gap-8 md:bg-transparent md:p-0 md:text-[13px] md:tracking-[1px] md:text-[#252b46]`}
				aria-label="Main navigation"
			>
				<button
					className="border-0 border-t border-white/20 bg-transparent py-5 font-[inherit] text-white no-underline hover:text-[#fa5757] md:border-0 md:py-0 md:text-[#252b46]"
					type="button"
					onClick={() => {
						window.location.hash = "features";
						setMenuOpen(false);
					}}
				>
					Features
				</button>
				<button
					className="border-0 border-t border-white/20 bg-transparent py-5 font-[inherit] text-white no-underline hover:text-[#fa5757] md:border-0 md:py-0 md:text-[#252b46]"
					type="button"
					onClick={() => {
						window.location.hash = "features";
						setMenuOpen(false);
					}}
				>
					Pricing
				</button>
				<button
					className="border-0 border-t border-white/20 bg-transparent py-5 font-[inherit] text-white no-underline hover:text-[#fa5757] md:border-0 md:py-0 md:text-[#252b46]"
					type="button"
					onClick={() => {
						window.location.hash = "contact";
						setMenuOpen(false);
					}}
				>
					Contact
				</button>
				<button
					className="mt-5 rounded border-2 border-white py-3 font-medium text-white no-underline hover:bg-white hover:text-[#252b46] md:mt-0 md:border-[#fa5757] md:bg-[#fa5757] md:px-[31px] md:py-[11px] md:shadow-md md:hover:bg-white md:hover:text-[#fa5757]"
					type="button"
					onClick={() => setMenuOpen(false)}
				>
					Login
				</button>
				<div className="mt-auto flex justify-center gap-10 pb-8 md:hidden">
					<a href="#contact" aria-label="Facebook">
						<img
							className="brightness-0 invert"
							src={`${ASSET_ROOT_BOOKMARK_LANDING_PAGE}/icon-facebook.svg`}
							alt=""
						/>
					</a>
					<a href="#contact" aria-label="Twitter">
						<img
							className="brightness-0 invert"
							src={`${ASSET_ROOT_BOOKMARK_LANDING_PAGE}/icon-twitter.svg`}
							alt=""
						/>
					</a>
				</div>
			</nav>
		</header>
	);
};
