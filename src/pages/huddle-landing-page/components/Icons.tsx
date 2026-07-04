import { Image } from "@global/components";
import type { JSX } from "react";
import { SOCIAL_MEDIA_ICONS } from "../../../constants/data";

export const Icons = (): JSX.Element => (
	<ul className="w-full flex items-center justify-center xl:justify-end gap-5">
		{SOCIAL_MEDIA_ICONS.map((icon) => (
			<li key={icon} className="border border-white rounded-full p-2">
				<Image className="size-4 invert xl:size-6" path={icon} alt={icon} />
			</li>
		))}
	</ul>
);
