import type { JSX } from "react";
import { DATA_LINKS_FYLO_DARK_LANDING_PAGE } from "../../../constants/data";

export const Links = (): JSX.Element => (
	<ul className="flex justify-between items-center gap-6">
		{DATA_LINKS_FYLO_DARK_LANDING_PAGE.map((link) => (
			<li
				key={link}
				className="text-white opacity-50 hover:text-white hover:underline hover:opacity-100"
			>
				<a href="./pages/fylo-dark-landing-page" target="_self">
					{link}
				</a>
			</li>
		))}
	</ul>
);
