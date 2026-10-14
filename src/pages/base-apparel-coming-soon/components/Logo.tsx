import { Image } from "@global/components";
import type { JSX } from "react";
import { IMG_LOGO_BASE_APPAREL_COMING_SOON } from "../../../constants/data";

export const Logo = (): JSX.Element => (
	<Image
		className="w-25 lg:w-39.5"
		path={IMG_LOGO_BASE_APPAREL_COMING_SOON}
		alt="Base Apparel"
	/>
);
