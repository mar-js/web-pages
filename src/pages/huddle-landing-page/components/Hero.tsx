import type { JSX } from "react";
import { Image } from "./Image";

export const Hero = (): JSX.Element => (
	<Image
		path="huddle-landing-page/illustration-mockups.svg"
		alt="Hero"
		className="w-full xl:w-3/6 h-auto object-cover"
	/>
);
