import { ASSET_ROOT_HOTEL_BOOKING } from "../../../constants/data";

export const Header = ({
	menuOpen,
	setMenuOpen,
}: {
	menuOpen: boolean;
	setMenuOpen: (open: boolean) => void;
}) => (
	<div className="hotel-mobile-bar fixed inset-x-0 top-0 z-10 flex h-[72px] items-center justify-between border-b border-[#e5ddcf] bg-[#f7f3eb] px-5 md:hidden">
		<a className="hotel-brand" href="#stay">
			<img className="w-[150px]" src={`${ASSET_ROOT_HOTEL_BOOKING}/images/logo.svg`} alt="Maison Soleil" />
		</a>
		<button
			type="button"
			className="hotel-menu-toggle rounded border-0 bg-transparent p-2"
			aria-label={menuOpen ? "Close stay navigation" : "Open stay navigation"}
			aria-expanded={menuOpen}
			onClick={() => setMenuOpen(!menuOpen)}
		>
			<img src={`${ASSET_ROOT_HOTEL_BOOKING}/images/icon-${menuOpen ? "close" : "menu"}.svg`} alt="" />
		</button>
	</div>
);
