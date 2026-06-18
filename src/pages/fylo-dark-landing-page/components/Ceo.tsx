import type { JSX } from "react";
import { DATA_CEO_FYLO_DARK_LANDING_PAGE } from "../../../constants/data";
import { Image } from "./Image";

export const Ceo = (): JSX.Element => (
	<div className="w-full flex flex-wrap justify-center items-center gap-10 text-white py-28">
		{DATA_CEO_FYLO_DARK_LANDING_PAGE.map((ceo) => (
			<article
				key={ceo.img}
				className="max-w-86 bg-fylo-dark-navy-800 p-8 rounded-lg"
			>
				<p className="opacity-80 text-sm mb-4">{ceo.description}</p>
				<div className="flex justify-start items-center gap-4">
					<Image
						path={ceo.img}
						alt={ceo.title}
						className="max-w-8 rounded-full"
					/>
					<div className="leading-3">
						<h5 className="text-[10px]">{ceo.title}</h5>
						<span className="text-[10px] opacity-80">{ceo.subtitle}</span>
					</div>
				</div>
			</article>
		))}
	</div>
);
