import { Image } from "@global/components";
import type { JSX } from "react";
import { IMG_LOGO_HUDDLE_LANDING_PAGE } from "../../../constants/data";

export const Logo = (): JSX.Element => (
	<h1 className="max-w-52">
		<Image path={IMG_LOGO_HUDDLE_LANDING_PAGE} alt="Huddle" />
	</h1>
);
