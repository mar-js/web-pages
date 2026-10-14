import type { JSX } from "react";
import { useState } from "react";
import { ASSET_ROOT_URL_SHORTENING_API } from "../../../constants/data";

export const Navigation = (): JSX.Element => {
	const [menuOpen, setMenuOpen] = useState(false);
	const closeMenu = () => setMenuOpen(false);

	return (
		<>
			<a href="#top" aria-label="Shortly home">
				<img
					src={`${ASSET_ROOT_URL_SHORTENING_API}/logo.svg`}
					alt="Shortly"
					className="mr-10 w-[120px]"
				/>
			</a>
			<button
				type="button"
				className="md:hidden"
				aria-label={menuOpen ? "Close navigation" : "Open navigation"}
				aria-expanded={menuOpen}
				onClick={() => setMenuOpen(!menuOpen)}
			>
				<span className="flex w-6 flex-col gap-[5px]">
					<span className="h-[3px] w-full bg-[#9e9aa7]" />
					<span className="h-[3px] w-full bg-[#9e9aa7]" />
					<span className="h-[3px] w-full bg-[#9e9aa7]" />
				</span>
			</button>
			<nav
				className={`${menuOpen ? "flex" : "hidden"} absolute left-6 right-6 top-24 z-20 flex-col items-center gap-6 rounded-xl bg-[#3b3054] px-6 py-8 text-white shadow-xl md:static md:flex md:flex-1 md:flex-row md:justify-between md:gap-8 md:bg-transparent md:p-0 md:text-[#9e9aa7] md:shadow-none`}
				aria-label="Main navigation"
			>
				<div className="flex flex-col items-center gap-6 font-bold md:flex-row md:gap-8">
					<a href="#features" onClick={closeMenu} className="hover:text-[#232127]">
						Features
					</a>
					<a href="#pricing" onClick={closeMenu} className="hover:text-[#232127]">
						Pricing
					</a>
					<a href="#resources" onClick={closeMenu} className="hover:text-[#232127]">
						Resources
					</a>
				</div>
				<div className="flex w-full flex-col items-center gap-6 border-t border-white/20 pt-6 font-bold md:w-auto md:flex-row md:border-0 md:pt-0">
					<a href="#login" onClick={closeMenu} className="hover:text-[#232127]">
						Login
					</a>
					<a
						href="#signup"
						onClick={closeMenu}
						className="w-full rounded-full bg-[#2acfcf] px-6 py-2.5 text-center text-white transition-colors hover:bg-[#9be3e2] md:w-auto"
					>
						Sign Up
					</a>
				</div>
			</nav>
		</>
	);
};
