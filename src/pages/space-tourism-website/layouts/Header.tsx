import type { JSX } from "react";
import { useState } from "react";
import { ASSET_ROOT_SPACE_TOURISM } from "../../../constants/data";
import type { SpaceTourismPage } from "../../../global/interfaces";
import { Navigation } from "../components";

interface HeaderProps {
	page: SpaceTourismPage;
	onPageChange: (page: SpaceTourismPage) => void;
}

export const Header = ({ page, onPageChange }: HeaderProps): JSX.Element => {
	const [menuOpen, setMenuOpen] = useState(false);
	const choosePage = (next: SpaceTourismPage) => {
		onPageChange(next);
		setMenuOpen(false);
	};

	return (
		<header className="relative z-20 flex h-24 items-center justify-between px-6 md:h-28 md:pl-10 md:pr-0 xl:mt-10 xl:pl-16">
			<a
				href="#home"
				aria-label="Space tourism home"
				onClick={() => choosePage("home")}
			>
				<img
					src={`${ASSET_ROOT_SPACE_TOURISM}/shared/logo.svg`}
					alt=""
					className="h-10 w-10 md:h-12 md:w-12"
				/>
			</a>
			<Navigation
				page={page}
				menuOpen={menuOpen}
				onToggleMenu={() => setMenuOpen(!menuOpen)}
				onPageChange={choosePage}
			/>
		</header>
	);
};
