import type { JSX } from "react";
import { ASSET_ROOT_GRID_LANDING_PAGE, DATA_GRID_IMPACT_STATS } from "../../../constants/data";

export const Impact = (): JSX.Element => (
	<section
		className="grid-stats block lg:grid lg:grid-cols-2 lg:grid-rows-2"
		id="impact"
		aria-label="Our impact"
	>
		{DATA_GRID_IMPACT_STATS.map((stat, index) => (
			<article
				className={`grid-stat flex min-h-[326px] flex-col justify-between border-b border-white/20 px-6 py-7 lg:min-h-0 lg:border-b lg:border-l lg:px-[34px] lg:py-[34px] ${index % 2 === 1 ? "lg:border-r" : ""} ${index >= 2 ? "lg:border-b-0" : ""}`}
				key={stat.label}
			>
				<div className="grid-stat-top flex items-start justify-between gap-4">
					<img className="mt-1 h-7 w-7 object-contain" src={`${ASSET_ROOT_GRID_LANDING_PAGE}/images/${stat.icon}`} alt="" />
					<p className="grid-stat-value m-0 text-[38px] font-medium leading-none tracking-[-0.035em] lg:text-[clamp(30px,3.1vw,40px)]">{stat.value}</p>
				</div>
				<div className="grid-stat-copy">
					<h2 className="mb-1 text-base font-medium lg:text-[17px]">{stat.label}</h2>
					<p className="m-0 text-sm leading-[1.5] text-white/75">{stat.description}</p>
				</div>
			</article>
		))}
	</section>
);
