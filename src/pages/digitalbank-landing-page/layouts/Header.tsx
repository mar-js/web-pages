import { useEffect, useState, type JSX } from "react";
import { ASSET_ROOT_DIGITALBANK_LANDING_PAGE, DATA_DIGITALBANK_NAVIGATION } from "../../../constants/data";

export const Header = (): JSX.Element => {
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const closeMenu = () => setMenuOpen(false);
		window.addEventListener("hashchange", closeMenu);
		return () => window.removeEventListener("hashchange", closeMenu);
	}, []);

	return (
		<header className="db-header relative z-10 h-20 bg-white">
			<div className="db-container db-header-inner mx-auto flex h-full w-[calc(100%_-_48px)] max-w-[1110px] items-center justify-between">
				<a href="#home" aria-label="Digitalbank home"><img className="db-logo" src={`${ASSET_ROOT_DIGITALBANK_LANDING_PAGE}/logo-dark.svg`} alt="Digitalbank" /></a>
				<nav className={`${menuOpen ? "absolute left-6 right-6 top-[88px] flex flex-col rounded bg-white py-5 shadow-xl" : "hidden"} db-nav z-10 items-center gap-0 md:static md:flex md:h-full md:flex-row md:gap-8 md:bg-transparent md:py-0 md:shadow-none`} aria-label="Main navigation">
					{DATA_DIGITALBANK_NAVIGATION.map(([label, href]) => <a className="flex h-auto items-center px-3 py-3 text-[17px] text-[#2d314d] no-underline md:h-full md:text-sm md:text-[#9698a6] md:hover:text-[#2d314d]" href={href} key={label} onClick={() => setMenuOpen(false)}>{label}</a>)}
				</nav>
				<a className="db-invite hidden rounded-full bg-gradient-to-r from-[#31d35c] to-[#2bb7da] px-8 py-[15px] text-sm font-bold text-white no-underline transition-opacity hover:opacity-70 md:inline-flex" href="#footer">Request Invite</a>
				<button
					className="db-menu-toggle border-0 bg-transparent p-2 md:hidden"
					type="button"
					aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
					aria-expanded={menuOpen}
					onClick={() => setMenuOpen((open) => !open)}
				>
					<img src={`${ASSET_ROOT_DIGITALBANK_LANDING_PAGE}/${menuOpen ? "icon-close.svg" : "icon-hamburger.svg"}`} alt="" />
				</button>
			</div>
		</header>
	);
};
