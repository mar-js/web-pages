import { Image } from "@global/components";
import type { JSX } from "react";
import { IMG_DEVICES_CLIPBOARD_LANDING_PAGE } from "../../../constants/data";

export const Devices = (): JSX.Element => (
	<div className="flex flex-col items-center gap-16">
		<article className="max-w-150 flex flex-col justify-center items-center gap-4 text-center">
			<h3 className="font-semibold text-3xl text-clipboard-gray-700">
				Access Clipboard anywhere
			</h3>
			<p className="text-clipboard-gray-500 text-lg">
				Whether you’re on the go, or at your computer, you can access all your
				Clipboard snippets in a few simple clicks.
			</p>
		</article>
		<Image
			path={IMG_DEVICES_CLIPBOARD_LANDING_PAGE}
			alt="Devices"
			className="min-w-62"
		/>
	</div>
);
