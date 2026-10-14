import { ASSET_ROOT_MANAGE, DATA_MANAGE_NAVIGATION } from "../../../constants/data";

const asset = (name: string) => `${ASSET_ROOT_MANAGE}/${name}`;

export const Header = ({
	menuOpen,
	setMenuOpen,
}: {
	menuOpen: boolean;
	setMenuOpen: (open: boolean) => void;
}) => (
	<header className="manage-header relative z-10 mx-auto flex h-[100px] max-w-[1110px] items-center justify-between px-6 md:px-10 xl:px-0">
		<a href="#home" aria-label="Manage home">
			<img src={asset("logo.svg")} alt="manage" className="manage-logo h-[25px] w-auto" />
		</a>
		<button
			type="button"
			className="manage-menu-toggle z-20 flex h-10 w-10 items-center justify-center md:hidden"
			aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
			aria-expanded={menuOpen}
			onClick={() => setMenuOpen(!menuOpen)}
		>
			<img src={asset(menuOpen ? "icon-close.svg" : "icon-hamburger.svg")} alt="" />
		</button>
		{menuOpen && (
			<button type="button" className="manage-menu-scrim fixed inset-0 z-10 bg-black/40 md:hidden" aria-label="Close navigation menu" onClick={() => setMenuOpen(false)} />
		)}
		<nav className={`manage-nav absolute left-6 right-6 top-24 z-20 flex-col gap-5 bg-white px-8 py-10 text-center shadow-lg md:static md:flex-row md:gap-[31px] md:bg-transparent md:p-0 md:shadow-none ${menuOpen ? "flex" : "hidden"} md:flex`} aria-label="Main">
			{DATA_MANAGE_NAVIGATION.map((item) => (
				<button
					type="button"
					key={item}
					className="border-0 bg-transparent p-0 text-sm font-bold text-[#242d52] hover:text-[#9095a7]"
					onClick={() => {
						setMenuOpen(false);
						document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
					}}
				>
					{item}
				</button>
			))}
		</nav>
		<a href="#signup" className="manage-button manage-header-cta hidden rounded-full bg-[#f3603c] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-[#f3603c]/25 no-underline hover:bg-[#f98f75] md:inline-flex">
			Get Started
		</a>
	</header>
);
