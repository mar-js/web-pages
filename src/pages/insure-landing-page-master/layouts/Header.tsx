import { useState } from "react";
import {
	ASSET_ROOT_INSURE_LANDING_PAGE,
	DATA_INSURE_NAVIGATION,
} from "../../../constants/data";

export const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<header className="relative z-[3] mx-auto flex h-20 max-w-[1110px] items-center justify-between bg-white px-6 md:h-[80px] md:px-0">
				<a href="#top" aria-label="Insure home" className="inline-flex items-center">
					<img src={`${ASSET_ROOT_INSURE_LANDING_PAGE}/logo.svg`} alt="Insure" />
				</a>
				<button
					className="border-0 bg-transparent p-2 md:hidden"
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
					className={`${menuOpen ? "absolute inset-x-0 top-20 z-10 flex min-h-[calc(100vh-5rem)] flex-col gap-8 bg-[#2d2640] bg-[url('/assets/insure-landing-page-master/bg-pattern-mobile-nav.svg')] bg-bottom bg-no-repeat px-6 py-12 text-center text-white" : "hidden"} md:static md:flex md:min-h-0 md:flex-row md:items-center md:gap-6 md:bg-none md:p-0 md:text-[#2b272f]`}
					aria-label="Main navigation"
				>
					{DATA_INSURE_NAVIGATION.map(([label, href]) => (
						<a className="text-base font-bold uppercase tracking-[2px] no-underline hover:text-[#837d87] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current md:text-sm md:font-normal md:tracking-[1px]" href={href} key={label} onClick={() => setMenuOpen(false)}>
							{label}
						</a>
					))}
					<a className="border border-white px-5 py-2.5 text-sm uppercase tracking-[1px] no-underline hover:bg-white hover:text-[#2b272f] md:border-[#2b272f] md:hover:bg-[#2b272f] md:hover:text-white" href="#plans" onClick={() => setMenuOpen(false)}>
						View plans
					</a>
				</nav>
			</header>
			{menuOpen && (
				<button className="fixed inset-x-0 bottom-0 top-20 z-[2] border-0 bg-black/40 md:hidden" type="button" aria-label="Close navigation menu" onClick={() => setMenuOpen(false)} />
			)}
		</>
	);
};
