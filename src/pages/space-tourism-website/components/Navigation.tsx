import type { JSX } from "react";
import {
	ASSET_ROOT_SPACE_TOURISM,
	DATA_SPACE_NAVIGATION,
} from "../../../constants/data";
import type { SpaceTourismPage } from "../../../global/interfaces";

interface NavigationProps {
	page: SpaceTourismPage;
	menuOpen: boolean;
	onToggleMenu: () => void;
	onPageChange: (page: SpaceTourismPage) => void;
}

export const Navigation = ({
	page,
	menuOpen,
	onToggleMenu,
	onPageChange,
}: NavigationProps): JSX.Element => (
	<>
		<div className="hidden h-px grow bg-white/25 xl:block xl:-mr-12 xl:ml-16 xl:z-10" />
		<button
			type="button"
			className="z-30 md:hidden"
			aria-label={menuOpen ? "Close navigation" : "Open navigation"}
			aria-expanded={menuOpen}
			onClick={onToggleMenu}
		>
			<img
				src={`${ASSET_ROOT_SPACE_TOURISM}/shared/${menuOpen ? "icon-close.svg" : "icon-hamburger.svg"}`}
				alt=""
				className="h-5 w-6"
			/>
		</button>
		<nav
			className={`${menuOpen ? "flex" : "hidden"} absolute right-0 top-0 h-screen w-[70%] flex-col gap-8 bg-white/5 px-8 pt-32 backdrop-blur-2xl md:static md:flex md:h-24 md:w-auto md:flex-row md:items-center md:gap-10 md:bg-white/5 md:px-12 md:pt-0 xl:w-[57%] xl:pl-24`}
			aria-label="Main navigation"
		>
			{DATA_SPACE_NAVIGATION.map((item, index) => (
				<button
					type="button"
					key={item.id}
					onClick={() => onPageChange(item.id)}
					className={`flex h-10 items-center gap-3 border-r-0 text-left font-['Barlow_Condensed',sans-serif] text-sm uppercase tracking-[0.17em] transition-colors md:h-full md:border-r-0 md:border-b-[3px] md:pt-[3px] ${page === item.id ? "border-white font-semibold md:border-white" : "border-transparent hover:border-white/50 md:hover:border-white/50"}`}
				>
					<span className="font-bold md:hidden">{`0${index}`}</span>
					<span className="hidden font-bold md:inline">{`0${index}`}</span>
					{item.label}
				</button>
			))}
		</nav>
	</>
);
