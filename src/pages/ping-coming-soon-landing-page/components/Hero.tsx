import type { JSX } from "react";
import { Subtitle } from "./Subtitle";

export const Hero = (): JSX.Element => (
	<article className="flex flex-col justify-center items-center gap-5">
		<Subtitle />
		<h3 className="text-ping-coming-soon-gray-400">
			Subscribe and get notified
		</h3>
	</article>
);
