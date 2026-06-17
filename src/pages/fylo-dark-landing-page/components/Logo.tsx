import type { JSX } from "react";
import { Image } from "./Image";

export const Logo = (): JSX.Element => (
	<h1 className="max-w-28">
		<Image path="fylo-dark-landing-page/logo.svg" alt="Fylo" />
	</h1>
);
