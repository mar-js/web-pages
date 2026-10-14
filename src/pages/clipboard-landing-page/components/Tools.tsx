import { Image } from "@global/components";
import type { JSX } from "react";
import { DATA_TOOLS_CLIPBOARD_LANDING_PAGE } from "../../../constants/data";

export const Tools = (): JSX.Element => (
	<div className="flex flex-col items-center gap-16">
		<article className="max-w-150 flex flex-col justify-center items-center gap-4 text-center">
			<h3 className="font-semibold text-3xl text-clipboard-gray-700">
				Supercharge your workflow
			</h3>
			<p className="text-clipboard-gray-500 text-lg">
				We’ve got the tools to boost your productivity.
			</p>
		</article>
		<div className="flex justify-center items-start flex-wrap gap-12">
			{DATA_TOOLS_CLIPBOARD_LANDING_PAGE.map((tool) => (
				<article
					key={tool.title}
					className="max-w-80 flex flex-col justify-center items-center gap-4 text-center"
				>
					<Image path={tool.img} alt={tool.title} className="max-w-10 mb-4" />
					<h4 className="font-semibold text-xl text-clipboard-gray-700">
						{tool.title}
					</h4>
					<p className="text-clipboard-gray-500">{tool.description}</p>
				</article>
			))}
		</div>
	</div>
);
