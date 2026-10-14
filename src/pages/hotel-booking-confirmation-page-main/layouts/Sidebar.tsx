import {
	ASSET_ROOT_HOTEL_BOOKING,
	DATA_HOTEL_NAVIGATION,
} from "../../../constants/data";
import { Footer } from "./Footer";

export const Sidebar = ({
	menuOpen,
	setMenuOpen,
	openEditor,
}: {
	menuOpen: boolean;
	setMenuOpen: (open: boolean) => void;
	openEditor: () => void;
}) => (
	<aside className={`hotel-sidebar fixed inset-x-0 top-[72px] z-[6] max-h-[calc(100vh-72px)] flex-col overflow-y-auto border-b border-[#e5ddcf] bg-[#f7f3eb] px-4 py-4 md:inset-y-0 md:left-0 md:right-auto md:z-[5] md:flex md:h-screen md:max-h-none md:w-[260px] md:border-b-0 md:border-r md:px-4 md:py-[22px] ${menuOpen ? "flex" : "hidden"} md:flex`} aria-label="Hotel information">
		<a className="hotel-brand mb-8 hidden md:block" href="#stay">
			<img className="w-[165px]" src={`${ASSET_ROOT_HOTEL_BOOKING}/images/logo.svg`} alt="Maison Soleil" />
		</a>
		<nav className={`hotel-nav mt-4 flex flex-col gap-1 ${menuOpen ? "flex" : ""}`} aria-label="Stay navigation">
			{DATA_HOTEL_NAVIGATION.map(([label, target, icon], index) => {
				const itemContent = (
					<>
						<img className="h-[18px] w-[18px] object-contain" src={`${ASSET_ROOT_HOTEL_BOOKING}/images/${icon}`} alt="" />
						<span className="min-w-0">{label}</span>
						{index === 0 && <span className="hotel-nav-badge ml-auto rounded-full bg-[#a55337] px-2 py-0.5 text-xs text-white">1</span>}
					</>
				);
				return target === "stay" ? (
					<button className="flex min-h-[42px] items-center gap-3 rounded-xl border-0 bg-white px-3 text-left text-sm text-[#302b26]" key={target} type="button" onClick={openEditor}>
						{itemContent}
					</button>
				) : (
					<a className="flex min-h-[42px] items-center gap-3 rounded-xl px-3 text-sm text-[#766b60] hover:bg-white hover:text-[#302b26]" href={`#${target}`} key={target} onClick={() => setMenuOpen(false)}>
						{itemContent}
					</a>
				);
			})}
		</nav>
		<Footer />
	</aside>
);
