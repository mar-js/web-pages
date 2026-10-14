import { Image } from "@global/components";
import type { JSX } from "react";
import {
	DATA_SNIPPETS_CLIPBOARD_LANDING_PAGE,
	IMG_COMPUTER_CLIPBOARD_LANDING_PAGE,
} from "../../../constants/data";

export const Snippets = (): JSX.Element => (
	<div className="w-full flex flex-col items-center gap-16">
		<article className="max-w-150 flex flex-col justify-center items-center gap-4 text-center">
			<h3 className="font-semibold text-3xl text-clipboard-gray-700">
				Keep track of your snippets
			</h3>
			<p className="text-clipboard-gray-500 text-lg">
				Clipboard instantly stores any item you copy in the cloud, meaning you
				can access your snippets immediately on all your devices. Our Mac and
				iOS apps will help you organize everything.
			</p>
		</article>
		<div className="w-full flex flex-col lg:flex-row items-center gap-16">
			<Image
				path={IMG_COMPUTER_CLIPBOARD_LANDING_PAGE}
				alt="Computer"
				className="max-w-140 lg:-ml-24"
			/>
			<div className="flex flex-col gap-10 text-center lg:text-left">
				{DATA_SNIPPETS_CLIPBOARD_LANDING_PAGE.map((snippet) => (
					<article key={snippet.title} className="max-w-90 flex flex-col gap-2">
						<h4 className="font-semibold text-xl text-clipboard-gray-700">
							{snippet.title}
						</h4>
						<p className="text-clipboard-gray-500">{snippet.description}</p>
					</article>
				))}
			</div>
		</div>
	</div>
);
