import type { JSX } from "react";
import { ICONS_HUDDLE_LANDING_PAGE } from "../../../constants/data";
import { Image } from "./Image";

export const Icons = (): JSX.Element => (
	<ul className="w-full flex items-center justify-center xl:justify-end gap-5">
		{ICONS_HUDDLE_LANDING_PAGE.map((icon) => (
			<li key={icon} className="border border-white rounded-full p-2">
				<Image className="size-4 invert xl:size-6" path={icon} alt={icon} />
			</li>
		))}
	</ul>
);
