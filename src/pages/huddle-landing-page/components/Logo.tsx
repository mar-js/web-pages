import type { JSX } from "react";
import { Image } from "./Image";

export const Logo = (): JSX.Element => (
	<h1 className="max-w-52">
		<Image path="huddle-landing-page/logo.svg" alt="Huddle" />
	</h1>
);
