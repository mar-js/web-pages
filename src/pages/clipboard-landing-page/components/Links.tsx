import type { JSX } from "react";
import { DATA_LINKS_PAGES_CLIPBOARD_LANDING_PAGE } from "../../../constants/data";

export const Links = (): JSX.Element => (
	<>
		{DATA_LINKS_PAGES_CLIPBOARD_LANDING_PAGE.map((group) => (
			<ul key={group[0]} className="flex flex-col gap-4">
				{group.map((link) => (
					<li
						key={link}
						className="text-clipboard-gray-700 hover:text-clipboard-green-500"
					>
						<a href="./pages/clipboard-landing-page" target="_self">
							{link}
						</a>
					</li>
				))}
			</ul>
		))}
	</>
);
