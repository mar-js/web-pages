import type { JSX } from "react";
import { DATA_SERVICE_FYLO_DARK_LANDING_PAGE } from "../../../constants/data";
import { Image } from "./Image";

export const Service = (): JSX.Element => (
	<div className="flex justify-center items-center flex-wrap gap-25 py-25">
		{DATA_SERVICE_FYLO_DARK_LANDING_PAGE.map((service) => (
			<article
				key={service.title}
				className="max-w-105 flex flex-col justify-center items-center gap-4 text-center text-white"
			>
				<Image path={service.img} alt={service.title} className="max-w-15" />
				<h3 className="text-lg">{service.title}</h3>
				<p className="text-md opacity-60">{service.description}</p>
			</article>
		))}
	</div>
);
