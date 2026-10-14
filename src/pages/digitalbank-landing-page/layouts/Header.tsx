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
		<>
			<header className="relative z-20 h-[70px] bg-white">
				<div className="mx-auto flex h-full w-[calc(100%_-_48px)] max-w-[1110px] items-center justify-between">
					<a href="#home" aria-label="Digitalbank home"><img className="w-[140px]" src={`${ASSET_ROOT_DIGITALBANK_LANDING_PAGE}/logo-dark.svg`} alt="Digitalbank" /></a>
					<nav id="digitalbank-navigation" className={`${menuOpen ? "absolute left-6 right-6 top-[88px] flex flex-col rounded bg-white py-5 shadow-xl" : "hidden"} z-20 items-center gap-0 md:static md:flex md:h-full md:flex-row md:gap-8 md:bg-transparent md:py-0 md:shadow-none`} aria-label="Main navigation">
						{DATA_DIGITALBANK_NAVIGATION.map(([label, href]) => <a className="flex h-auto items-center px-3 py-3 text-[17px] text-[#2d314d] no-underline hover:text-[#2d314d] md:relative md:h-full md:text-sm md:text-[#9698a6] md:after:absolute md:after:inset-x-3 md:after:bottom-0 md:after:h-1 md:after:origin-left md:after:scale-x-0 md:after:bg-gradient-to-r md:after:from-[#31d35c] md:after:to-[#2bb7da] md:after:transition-transform md:hover:after:scale-x-100" href={href} key={label} onClick={() => setMenuOpen(false)}>{label}</a>)}
					</nav>
					<a className="hidden rounded-full bg-gradient-to-r from-[#31d35c] to-[#2bb7da] px-8 py-[15px] text-sm font-bold text-white no-underline transition-opacity hover:opacity-70 md:inline-flex" href="#footer">Request Invite</a>
					<button
						className="border-0 bg-transparent p-2 md:hidden"
						type="button"
						aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
						aria-expanded={menuOpen}
						aria-controls="digitalbank-navigation"
						onClick={() => setMenuOpen((open) => !open)}
					>
						<img src={`${ASSET_ROOT_DIGITALBANK_LANDING_PAGE}/${menuOpen ? "icon-close.svg" : "icon-hamburger.svg"}`} alt="" />
					</button>
				</div>
			</header>
			{menuOpen && <button className="fixed inset-x-0 top-[70px] z-10 h-[calc(100vh-70px)] border-0 bg-gradient-to-b from-[#2d314d]/80 to-[#2d314d]/0 md:hidden" type="button" aria-label="Close navigation menu" onClick={() => setMenuOpen(false)} />}
		</>
	);
};
