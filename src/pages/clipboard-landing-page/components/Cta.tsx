import type { JSX } from "react";
import { Buttons } from "./Buttons";

export const Cta = (): JSX.Element => (
	<article className="max-w-150 flex flex-col justify-center items-center gap-6 text-center">
		<h3 className="font-semibold text-3xl text-clipboard-gray-700">
			Clipboard for iOS and Mac OS
		</h3>
		<p className="text-clipboard-gray-500 text-lg">
			Available for free on the App Store. Download for Mac or iOS, sync with
			iCloud and you’re ready to start adding to your clipboard.
		</p>
		<Buttons />
	</article>
);
