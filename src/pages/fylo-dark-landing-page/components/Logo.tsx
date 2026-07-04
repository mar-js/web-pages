import { Image } from "@global/components";
import type { JSX } from "react";
import { IMG_LOGO_FYLO_DARK_LANDING_PAGE } from "../../../constants/data";

export const Logo = (): JSX.Element => (
	<h1 className="max-w-48 xl:max-w-40">
		<Image path={IMG_LOGO_FYLO_DARK_LANDING_PAGE} alt="Fylo" />
	</h1>
);
