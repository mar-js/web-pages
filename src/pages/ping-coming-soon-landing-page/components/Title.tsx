import type { JSX } from "react";

export const Title = (): JSX.Element => (
	<h2 className="text-black font-bold text-3xl">
		PING<span className="text-ping-coming-soon-blue-500">.</span>
	</h2>
);
