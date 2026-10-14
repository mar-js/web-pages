import { useState, type JSX } from "react";
import { ASSET_ROOT_GRID_LANDING_PAGE, DATA_GRID_NAVIGATION } from "../../../constants/data";

export const Header = (): JSX.Element => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<header className="grid-header relative z-[3] flex min-h-[72px] items-center justify-between border-b border-white/20 px-[3.35vw]">
				<a className="grid-brand inline-flex items-center gap-2 text-sm font-medium text-white no-underline" href="#about" aria-label="Bridge Collective home">
					<span className="h-2.5 w-2.5 rounded-full bg-white" aria-hidden="true" /> Bridge Collective
				</a>
				<button
					className="grid-menu-toggle grid h-[42px] w-[42px] cursor-pointer place-items-center border-0 bg-transparent p-2 text-white"
					type="button"
					aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
					aria-expanded={menuOpen}
					aria-controls="grid-navigation"
					onClick={() => setMenuOpen((open) => !open)}
				>
					{menuOpen ? (
						<img src={`${ASSET_ROOT_GRID_LANDING_PAGE}/images/icon-close.svg`} alt="" />
					) : (
						<img src={`${ASSET_ROOT_GRID_LANDING_PAGE}/images/icon-menu.svg`} alt="" />
					)}
				</button>
				<nav
					id="grid-navigation"
					className={`grid-nav absolute right-0 top-[71px] z-[4] min-w-[220px] flex-col border border-white/20 bg-[#294fff] px-6 py-3 ${menuOpen ? "flex" : "hidden"} sm:right-[34px] sm:top-[72px]`}
					aria-label="Main navigation"
				>
					{DATA_GRID_NAVIGATION.map(([label, href]) => (
						<a className="border-b border-white/20 py-3 text-sm text-white/80 no-underline last:border-0 hover:text-white hover:underline" key={label} href={href} onClick={() => setMenuOpen(false)}>
							{label}
						</a>
					))}
				</nav>
			</header>
			{menuOpen && (
				<button
					className="grid-menu-backdrop fixed inset-0 z-[2] border-0 bg-black/35"
					type="button"
					aria-label="Close navigation menu"
					onClick={() => setMenuOpen(false)}
				/>
			)}
		</>
	);
};
