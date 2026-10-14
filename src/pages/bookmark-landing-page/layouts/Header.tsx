import { useEffect, useState, type JSX } from "react";
import { ASSET_ROOT_BOOKMARK_LANDING_PAGE } from "../../../constants/data";

export const Header = (): JSX.Element => {
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const closeMenu = () => setMenuOpen(false);
		window.addEventListener("hashchange", closeMenu);
		return () => window.removeEventListener("hashchange", closeMenu);
	}, []);

	return (
		<header className="mx-auto flex h-[100px] w-[calc(100%_-_48px)] max-w-[1110px] items-center justify-between">
			<a href="#top" aria-label="Bookmark home">
				<img className="bm-logo" src={`${ASSET_ROOT_BOOKMARK_LANDING_PAGE}/logo-bookmark.svg`} alt="Bookmark" />
			</a>
			<button
				className="bm-menu-toggle rounded border-0 bg-transparent p-2 md:hidden"
				type="button"
				aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
				aria-expanded={menuOpen}
				onClick={() => setMenuOpen((open) => !open)}
			>
				<img src={`${ASSET_ROOT_BOOKMARK_LANDING_PAGE}/${menuOpen ? "icon-close.svg" : "icon-hamburger.svg"}`} alt="" />
			</button>
			<nav className={`${menuOpen ? "absolute left-6 right-6 top-[88px] flex flex-col rounded bg-white p-5 shadow-xl" : "hidden"} bm-nav z-10 items-center gap-8 text-[13px] uppercase tracking-[1px] md:static md:flex md:flex-row md:bg-transparent md:p-0 md:shadow-none`} aria-label="Main navigation">
				<a className="text-[#252b46] no-underline hover:text-[#fa5757]" href="#features">Features</a>
				<a className="text-[#252b46] no-underline hover:text-[#fa5757]" href="#extensions">Pricing</a>
				<a className="text-[#252b46] no-underline hover:text-[#fa5757]" href="#contact">Contact</a>
				<a className="bm-login rounded border-2 border-[#fa5757] bg-[#fa5757] px-[31px] py-[11px] font-medium text-white shadow-md hover:bg-white hover:text-[#fa5757]" href="#contact">Login</a>
			</nav>
		</header>
	);
};
