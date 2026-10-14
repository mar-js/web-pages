import { useEffect, useState, type JSX } from "react";
import { ASSET_ROOT_CROWDFUNDING_PRODUCT_PAGE } from "../../../constants/data";

export const Header = (): JSX.Element => {
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const closeMenu = () => setMenuOpen(false);
		window.addEventListener("hashchange", closeMenu);
		return () => window.removeEventListener("hashchange", closeMenu);
	}, []);

	return (
		<header className="cf-hero relative h-[400px] bg-[#333] bg-[url('/assets/crowdfunding-product-page/image-hero-desktop.jpg')] bg-cover bg-[position:center_43%] after:pointer-events-none after:absolute after:inset-0 after:bg-gradient-to-b after:from-black/50 after:to-transparent max-md:bg-[url('/assets/crowdfunding-product-page/image-hero-mobile.jpg')]">
			<nav className="cf-nav relative z-10 mx-auto flex h-[110px] w-[calc(100%_-_48px)] max-w-[1110px] items-center justify-between" aria-label="Main navigation">
				<a href="#top" aria-label="Crowdfund home"><img className="w-[128px]" src={`${ASSET_ROOT_CROWDFUNDING_PRODUCT_PAGE}/logo.svg`} alt="crowdfund" /></a>
				<button
					className="cf-menu border-0 bg-transparent p-2.5 md:hidden"
					type="button"
					aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
					aria-expanded={menuOpen}
					onClick={() => setMenuOpen((open) => !open)}
				>
					<img src={`${ASSET_ROOT_CROWDFUNDING_PRODUCT_PAGE}/${menuOpen ? "icon-close-menu.svg" : "icon-hamburger.svg"}`} alt="" />
				</button>
				<div className={`${menuOpen ? "absolute left-0 right-0 top-20 flex flex-col bg-white p-6 text-center text-[#3b3b3b] md:static md:flex-row md:bg-transparent md:p-0 md:text-white" : "hidden md:flex"} cf-nav-links gap-8 text-[13px] text-white`}>
					<a href="#about">About</a>
					<a href="#rewards">Discover</a>
					<a href="#rewards">Get Started</a>
				</div>
			</nav>
		</header>
	);
};
