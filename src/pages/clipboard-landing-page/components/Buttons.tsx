import type { JSX } from "react";

export const Buttons = (): JSX.Element => (
	<div className="flex flex-col md:flex-row justify-center items-center gap-4">
		<a
			className="min-w-56 text-white text-center text-lg py-3 px-8 bg-clipboard-green-500 rounded-full shadow-[0_10px_20px_hsla(171,66%,44%,0.3)] hover:brightness-110"
			href="./pages/clipboard-landing-page"
			target="_self"
		>
			Download for iOS
		</a>
		<a
			className="min-w-56 text-white text-center text-lg py-3 px-8 bg-clipboard-blue-100 rounded-full shadow-[0_10px_20px_hsla(233,100%,69%,0.3)] hover:brightness-110"
			href="./pages/clipboard-landing-page"
			target="_self"
		>
			Download for Mac
		</a>
	</div>
);
