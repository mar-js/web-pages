import { useState, type JSX } from "react";
import { ASSET_ROOT_GRID_LANDING_PAGE, DATA_GRID_NAVIGATION } from "../../../constants/data";

export const Header = (): JSX.Element => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<header className="relative z-[3] flex min-h-[72px] items-center justify-between border-b border-white/20 px-[3.35vw]">
				<a className="inline-flex items-center gap-2 text-sm font-medium text-white no-underline" href="#about" aria-label="Bridge Collective home">
					<span className="h-2.5 w-2.5 rounded-full bg-white" aria-hidden="true" /> Bridge Collective
				</a>
				<button
					className="grid h-[42px] w-[42px] cursor-pointer place-items-center border-0 bg-transparent p-2 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
					type="button"
					aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
					aria-expanded={menuOpen}
					aria-controls="grid-navigation"
					onClick={() => setMenuOpen((open) => !open)}
				>
					<img src={`${ASSET_ROOT_GRID_LANDING_PAGE}/images/${menuOpen ? "icon-close.svg" : "icon-menu.svg"}`} alt="" />
				</button>
				{menuOpen && (
					<nav
						id="grid-navigation"
						className="fixed right-0 top-[72px] z-[4] flex h-[342px] w-full flex-col items-center justify-center gap-1 bg-[#294fff] px-6 sm:bottom-0 sm:top-[72px] sm:h-auto sm:w-[min(396px,33.333vw)]"
						aria-label="Main navigation"
					>
						{DATA_GRID_NAVIGATION.map(([label, href]) => (
							<a className="py-1 text-[30px] font-normal leading-[1.35] text-white no-underline hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" key={label} href={href} onClick={() => setMenuOpen(false)}>
								{label}
							</a>
						))}
					</nav>
				)}
			</header>
			{menuOpen && (
				<button
					className="fixed inset-0 z-[2] border-0 bg-black/25"
					type="button"
					aria-label="Close navigation menu"
					onClick={() => setMenuOpen(false)}
				/>
			)}
		</>
	);
};
