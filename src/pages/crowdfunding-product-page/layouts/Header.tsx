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
		<header className="relative z-30 h-[300px] bg-[#333] bg-[url('/assets/crowdfunding-product-page/image-hero-mobile.jpg')] bg-cover bg-top after:pointer-events-none after:absolute after:inset-0 after:bg-gradient-to-b after:from-black/50 after:to-transparent md:h-[400px] md:bg-[url('/assets/crowdfunding-product-page/image-hero-desktop.jpg')] md:bg-[position:center_43%]">
			<nav className="relative z-30 mx-auto flex h-[88px] w-[calc(100%_-_48px)] max-w-[1110px] items-center justify-between md:h-[110px]" aria-label="Main navigation">
				<a href="#top" aria-label="Crowdfund home"><img className="w-[128px]" src={`${ASSET_ROOT_CROWDFUNDING_PRODUCT_PAGE}/logo.svg`} alt="crowdfund" /></a>
				<button
					className="relative z-30 border-0 bg-transparent p-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden"
					type="button"
					aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
					aria-expanded={menuOpen}
					aria-controls="crowdfund-navigation"
					onClick={() => setMenuOpen((open) => !open)}
				>
					<img src={`${ASSET_ROOT_CROWDFUNDING_PRODUCT_PAGE}/${menuOpen ? "icon-close-menu.svg" : "icon-hamburger.svg"}`} alt="" />
				</button>
				<div id="crowdfund-navigation" className={`${menuOpen ? "absolute left-0 right-0 top-[80px] flex flex-col divide-y divide-[#e6e6e6] rounded bg-white px-6 text-[#3b3b3b] shadow-lg md:static md:flex-row md:divide-y-0 md:bg-transparent md:px-0 md:text-white md:shadow-none" : "hidden md:flex"} relative z-30 gap-0 text-base md:gap-8 md:text-[13px]`}>
					<a className="py-4 no-underline hover:underline md:py-0" href="#about" onClick={() => setMenuOpen(false)}>About</a>
					<a className="py-4 no-underline hover:underline md:py-0" href="#rewards" onClick={() => setMenuOpen(false)}>Discover</a>
					<a className="py-4 no-underline hover:underline md:py-0" href="#rewards" onClick={() => setMenuOpen(false)}>Get Started</a>
				</div>
			</nav>
			{menuOpen && <button className="fixed inset-0 z-20 border-0 bg-black/35 md:hidden" type="button" aria-label="Close navigation menu" onClick={() => setMenuOpen(false)} />}
		</header>
	);
};
