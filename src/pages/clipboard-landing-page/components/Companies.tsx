import { Image } from "@global/components";
import type { JSX } from "react";
import { DATA_COMPANIES_CLIPBOARD_LANDING_PAGE } from "../../../constants/data";

export const Companies = (): JSX.Element => (
	<ul className="w-full flex flex-col md:flex-row flex-wrap justify-around items-center gap-12">
		{DATA_COMPANIES_CLIPBOARD_LANDING_PAGE.map((company) => (
			<li key={company} className="max-w-32">
				<Image path={company} alt={company} />
			</li>
		))}
	</ul>
);
