import { useState } from "react";
import {
	ASSET_ROOT_INSURE_LANDING_PAGE,
	DATA_INSURE_NAVIGATION,
} from "../../../constants/data";

export const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<header className="insure-header relative z-[3] mx-auto flex h-20 max-w-[1110px] items-center justify-between bg-white px-6 md:h-[80px] md:px-0">
				<a href="#top" aria-label="Insure home" className="insure-logo-link">
					<img src={`${ASSET_ROOT_INSURE_LANDING_PAGE}/logo.svg`} alt="Insure" />
				</a>
				<button
					className="insure-menu-toggle border-0 bg-transparent p-2 md:hidden"
					type="button"
					aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
					aria-expanded={menuOpen}
					aria-controls="insure-navigation"
					onClick={() => setMenuOpen((open) => !open)}
				>
					<img src={`${ASSET_ROOT_INSURE_LANDING_PAGE}/icon-${menuOpen ? "close" : "hamburger"}.svg`} alt="" />
				</button>
				<nav
					id="insure-navigation"
					className={`${menuOpen ? "absolute inset-x-0 top-20 flex flex-col gap-6 bg-[#2d2640] px-6 py-8 text-center text-white" : "hidden"} insure-nav z-10 md:static md:flex md:flex-row md:items-center md:gap-6 md:bg-white md:p-0 md:text-[#2b272f]`}
					aria-label="Main navigation"
				>
					{DATA_INSURE_NAVIGATION.map(([label, href]) => (
						<a className="text-sm uppercase tracking-[1px] no-underline hover:text-[#837d87]" href={href} key={label} onClick={() => setMenuOpen(false)}>
							{label}
						</a>
					))}
					<a className="insure-outline-button border border-white px-5 py-2.5 text-sm uppercase tracking-[1px] no-underline hover:bg-[#2b272f] hover:text-white md:border-[#2b272f] md:hover:bg-[#2b272f]" href="#plans" onClick={() => setMenuOpen(false)}>
						View plans
					</a>
				</nav>
			</header>
			{menuOpen && (
				<button className="insure-menu-backdrop fixed inset-x-0 bottom-0 top-20 z-[2] border-0 bg-black/40" type="button" aria-label="Close navigation menu" onClick={() => setMenuOpen(false)} />
			)}
		</>
	);
};
