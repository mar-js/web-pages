import type { JSX } from "react";
import { DATA_LINKS_PAGES_FYLO_DARK_LANDING_PAGE } from "../../../constants/data";

const DATA_LINKS_PAGE_ONE = DATA_LINKS_PAGES_FYLO_DARK_LANDING_PAGE[0];
const DATA_LINKS_PAGE_TWO = DATA_LINKS_PAGES_FYLO_DARK_LANDING_PAGE[1];

export const LinksPages = (): JSX.Element => (
	<div className="flex flex-col md:flex-row gap-10">
		<ul className="flex flex-col gap-2">
			{DATA_LINKS_PAGE_ONE.map((link) => (
				<li
					key={link}
					className="text-white opacity-80 hover:text-white hover:opacity-100"
				>
					<a href="./pages/fylo-dark-landing-page" target="_self">
						{link}
					</a>
				</li>
			))}
		</ul>
		<ul className="flex flex-col gap-2">
			{DATA_LINKS_PAGE_TWO.map((link) => (
				<li
					key={link}
					className="text-white opacity-80 hover:text-white hover:opacity-100"
				>
					<a href="./pages/fylo-dark-landing-page" target="_self">
						{link}
					</a>
				</li>
			))}
		</ul>
	</div>
);
