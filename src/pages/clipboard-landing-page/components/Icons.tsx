import { Image } from "@global/components";
import type { JSX } from "react";
import { DATA_SOCIAL_CLIPBOARD_LANDING_PAGE } from "../../../constants/data";

export const Icons = (): JSX.Element => (
	<ul className="h-fit flex justify-center items-center gap-6">
		{DATA_SOCIAL_CLIPBOARD_LANDING_PAGE.map((icon) => (
			<li key={icon} className="hover:brightness-150 hover:saturate-200">
				<Image className="size-6" path={icon} alt={icon} />
			</li>
		))}
	</ul>
);
