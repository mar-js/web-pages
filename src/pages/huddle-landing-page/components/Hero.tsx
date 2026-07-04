import { Image } from "@global/components";
import type { JSX } from "react";
import { IMG_HERO_HUDDLE_LANDING_PAGE } from "../../../constants/data";

export const Hero = (): JSX.Element => (
	<Image
		path={IMG_HERO_HUDDLE_LANDING_PAGE}
		alt="Hero"
		className="w-full xl:w-1/2 h-auto object-cover"
	/>
);
