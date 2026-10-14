import { useState } from "react";
import { ASSET_ROOT_LOOPSTUDIOS, DATA_LOOPSTUDIOS_LINKS } from "../../../constants/data";

export const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="loop-header relative z-10 mx-auto flex h-32 w-[calc(100%_-_48px)] max-w-[1110px] items-center justify-between">
			<a href="#top" aria-label="Loopstudios home" className="loop-logo">
				<img className="w-[144px] md:w-[192px]" src={`${ASSET_ROOT_LOOPSTUDIOS}/logo.svg`} alt="loopstudios" />
			</a>
			<button
				type="button"
				className="loop-menu-toggle z-20 border-0 bg-transparent p-2 md:hidden"
				aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
				aria-expanded={menuOpen}
				aria-controls="loop-navigation"
				onClick={() => setMenuOpen((open) => !open)}
			>
				<img className="w-6" src={`${ASSET_ROOT_LOOPSTUDIOS}/icon-${menuOpen ? "close" : "hamburger"}.svg`} alt="" />
			</button>
			<nav
				className={`${menuOpen ? "absolute inset-x-0 top-24 flex flex-col gap-6 bg-black p-8 text-center" : "hidden"} loop-nav z-10 items-center gap-8 md:static md:flex md:flex-row md:bg-transparent md:p-0`}
				id="loop-navigation"
				aria-label="Main navigation"
			>
				{DATA_LOOPSTUDIOS_LINKS.map((link) => (
					<a className="relative py-2 text-sm text-white no-underline after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-white after:transition-all hover:after:w-1/2" href={link === "About" ? "#about" : "#creations"} key={link} onClick={() => setMenuOpen(false)}>
						{link}
					</a>
				))}
			</nav>
		</header>
	);
};
