import { useEffect, useState } from "react";
import { ASSET_ROOT_NEWS } from "../../../constants/data";
import { Navigation } from "../components";

export const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const closeOnEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") setMenuOpen(false);
		};
		window.addEventListener("keydown", closeOnEscape);
		return () => window.removeEventListener("keydown", closeOnEscape);
	}, []);

	return (
		<header className="news-header relative z-20 flex h-[100px] items-center justify-between">
			<a href="#top" aria-label="W. home">
				<img src={`${ASSET_ROOT_NEWS}/logo.svg`} className="news-logo w-12 sm:w-[65px]" alt="W." />
			</a>
			<button
				type="button"
				className="news-menu-toggle relative z-30 border-0 bg-transparent p-2 md:hidden"
				aria-label={menuOpen ? "Close menu" : "Open menu"}
				aria-expanded={menuOpen}
				onClick={() => setMenuOpen(!menuOpen)}
			>
				<img src={`${ASSET_ROOT_NEWS}/${menuOpen ? "icon-menu-close.svg" : "icon-menu.svg"}`} alt="" />
			</button>
			{menuOpen && (
				<button
					type="button"
					className="news-backdrop fixed inset-0 z-10 border-0 bg-black/50 md:hidden"
					aria-label="Close menu"
					onClick={() => setMenuOpen(false)}
				/>
			)}
			<Navigation open={menuOpen} onNavigate={() => setMenuOpen(false)} />
		</header>
	);
};
