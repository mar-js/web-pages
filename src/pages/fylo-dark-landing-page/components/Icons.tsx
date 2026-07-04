import { Image } from "@global/components";
import type { JSX } from "react";
import { SOCIAL_MEDIA_ICONS } from "../../../constants/data";

export const Icons = (): JSX.Element => (
	<ul className="h-fit flex justify-center xl:justify-start gap-5">
		{SOCIAL_MEDIA_ICONS.map((icon) => (
			<li key={icon} className="border border-white rounded-full p-2">
				<Image className="size-5 invert" path={icon} alt={icon} />
			</li>
		))}
	</ul>
);
