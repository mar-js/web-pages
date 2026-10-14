import type { JSX } from "react";
import { Buttons } from "./Buttons";

export const Hero = (): JSX.Element => (
	<article className="max-w-150 flex flex-col justify-center items-center gap-6 text-center">
		<h2 className="font-semibold text-3xl md:text-4xl text-clipboard-gray-700">
			A history of everything you copy
		</h2>
		<p className="text-clipboard-gray-500 text-lg">
			Clipboard allows you to track and organize everything you copy. Instantly
			access your clipboard on all your devices.
		</p>
		<Buttons />
	</article>
);
