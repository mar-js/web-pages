import { useEffect, useState } from "react";
import { ASSET_ROOT_ROOM_HOMEPAGE, DATA_ROOM_NAVIGATION } from "../../../constants/data";

export const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") setMenuOpen(false);
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, []);

	return (
		<header className="absolute inset-x-0 top-0 z-10 flex h-24 items-center justify-center px-6 md:inset-x-auto md:left-[11%] md:h-32 md:justify-start md:gap-14 md:px-0">
			<button
				type="button"
				className="absolute left-6 z-20 flex h-10 w-10 items-center justify-center md:hidden"
				aria-label={menuOpen ? "Close navigation" : "Open navigation"}
				aria-expanded={menuOpen}
				onClick={() => setMenuOpen(!menuOpen)}
			>
				<img src={`${ASSET_ROOT_ROOM_HOMEPAGE}/${menuOpen ? "icon-close.svg" : "icon-hamburger.svg"}`} alt="" />
			</button>
			<a href="#" className="z-10" aria-label="Room home">
				<img src={`${ASSET_ROOT_ROOM_HOMEPAGE}/logo.svg`} alt="room" className="w-[62px]" />
			</a>
			<nav
				className={`${menuOpen ? "flex" : "hidden"} absolute inset-x-0 top-0 h-24 items-center justify-end gap-6 bg-white px-6 text-[13px] font-semibold text-black md:static md:flex md:h-auto md:justify-start md:gap-8 md:bg-transparent md:p-0 md:text-white`}
				aria-label="Main navigation"
			>
				{DATA_ROOM_NAVIGATION.map((item) => (
					<a
						href={`#${item}`}
						key={item}
						onClick={() => setMenuOpen(false)}
						className="relative py-2 capitalize after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-current after:transition-all hover:after:w-1/2"
					>
						{item}
					</a>
				))}
			</nav>
		</header>
	);
};
