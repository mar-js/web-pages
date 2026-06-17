import type { JSX } from "react";
import { IMG_LOGO_FYLO_DARK_LANDING_PAGE } from "../../../constants/data";
import { Image } from "./Image";

export const Logo = (): JSX.Element => (
	<h1 className="max-w-28">
		<Image path={IMG_LOGO_FYLO_DARK_LANDING_PAGE} alt="Fylo" />
	</h1>
);
