import type { JSX } from "react";
import {
	ASSET_ROOT_URL_SHORTENING_API,
	DATA_URL_SHORTENING_FEATURES,
} from "../../../constants/data";

export const Features = (): JSX.Element => (
	<section id="features" className="mx-auto max-w-[1110px] pt-24 text-center md:pt-28">
		<h2 className="text-[1.75rem] font-bold tracking-[-0.5px] md:text-[2.5rem]">
			Advanced Statistics
		</h2>
		<p className="mx-auto mt-4 max-w-[510px] text-base leading-[1.7] text-[#9e9aa7]">
			Track how your links are performing across the web with our advanced
			statistics dashboard.
		</p>
		<div className="relative mt-20 grid gap-20 md:grid-cols-3 md:gap-8 md:text-left">
			<div className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 bg-[#2acfcf] md:left-0 md:top-1/2 md:h-2 md:w-full md:translate-x-0" />
			{DATA_URL_SHORTENING_FEATURES.map((feature, index) => (
				<article
					key={feature.title}
					className={`relative rounded-md bg-white px-7 pb-8 pt-20 ${index === 1 ? "md:mt-10" : ""} ${index === 2 ? "md:mt-20" : ""}`}
				>
					<div className="absolute left-1/2 top-0 flex h-[84px] w-[84px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#3b3054] md:left-7 md:translate-x-0">
						<img
							src={`${ASSET_ROOT_URL_SHORTENING_API}/${feature.image}`}
							alt=""
						/>
					</div>
					<h3 className="text-xl font-bold">{feature.title}</h3>
					<p className="mt-4 text-[15px] leading-[1.7] text-[#9e9aa7]">
						{feature.description}
					</p>
				</article>
			))}
		</div>
	</section>
);
