import type { JSX } from "react";

export const Button = (): JSX.Element => (
	<a
		href="./pages/huddle-landing-page"
		target="_self"
		className="min-w-64 bg-white rounded-full py-3 text-sm text-huddle-purple-700 text-center xl:py-4 hover:bg-huddle-magenta-400 hover:text-white hover:opacity-80"
	>
		Register
	</a>
);
