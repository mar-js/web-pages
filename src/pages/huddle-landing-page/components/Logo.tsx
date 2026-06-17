import type { JSX } from "react";
import { IMG_LOGO_HUDDLE_LANDING_PAGE } from "../../../constants/data";
import { Image } from "./Image";

export const Logo = (): JSX.Element => (
	<h1 className="max-w-52">
		<Image path={IMG_LOGO_HUDDLE_LANDING_PAGE} alt="Huddle" />
	</h1>
);
