import { type JSX, useState } from "react";
import {
	ASSET_ROOT_BOOKMARK_LANDING_PAGE,
	DATA_BOOKMARK_FEATURES,
} from "../../../constants/data";

export const Features = (): JSX.Element => {
	const [activeFeature, setActiveFeature] = useState(0);
	const feature = DATA_BOOKMARK_FEATURES[activeFeature];

	return (
		<section
			className="px-0 py-16 text-center"
			id="features"
			aria-labelledby="bm-features-title"
		>
			<div className="mx-auto w-[calc(100%_-_48px)] max-w-[1110px]">
				<div className="mx-auto mb-12 max-w-[550px]">
					<h2 className="mb-4 text-2xl font-medium sm:text-[30px]" id="bm-features-title">Features</h2>
					<p className="leading-[1.65] text-[#9194a1]">
						Our aim is to make it quick and easy for you to access your
						favourite websites. Your bookmarks sync between your devices so you
						can access them on the go.
					</p>
				</div>
				<div
					className="mx-auto flex max-w-[730px] flex-col border-t border-[#d9dbe2] sm:flex-row sm:border-t-0 sm:border-b"
					role="tablist"
					aria-label="Bookmark features"
				>
					{DATA_BOOKMARK_FEATURES.map((item, index) => (
						<button
							className="flex-1 cursor-pointer border-0 border-b border-[#d9dbe2] bg-transparent px-2.5 py-4 text-[15px] text-[#626575] hover:text-[#fa5757] aria-selected:border-b-4 aria-selected:border-[#fa5757] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5267df] sm:border-b-4 sm:px-3 sm:py-4 sm:text-base"
							key={item.tab}
							type="button"
							role="tab"
							id={`bm-tab-${index}`}
							aria-selected={activeFeature === index}
							aria-controls="bm-feature-panel"
							onClick={() => setActiveFeature(index)}
						>
							{item.tab}
						</button>
					))}
				</div>
				<div
					className="mx-auto mt-12 grid min-h-[360px] grid-cols-1 items-center gap-12 text-center sm:mt-18 sm:grid-cols-2 sm:gap-[90px] sm:text-left"
					id="bm-feature-panel"
					role="tabpanel"
					aria-labelledby={`bm-tab-${activeFeature}`}
				>
					<div className="relative isolate flex items-center before:absolute before:left-[-24px] before:top-[25%] before:-z-10 before:h-[65%] before:w-[calc(100%+48px)] before:rounded-r-[110px] before:bg-[#5267df] sm:before:left-[-50vw] sm:before:top-[24%] sm:before:h-[70%] sm:before:w-[calc(100%+50vw)] sm:before:rounded-r-[150px]">
						<img
							className="relative z-0 w-full"
							src={`${ASSET_ROOT_BOOKMARK_LANDING_PAGE}/${feature.image}`}
							alt=""
						/>
					</div>
					<div className="max-w-[445px]">
						<h3 className="mb-5 text-[26px] font-medium sm:text-[28px]">
							{feature.title}
						</h3>
						<p className="leading-[1.65] text-[#9194a1]">
							{feature.description}
						</p>
						<a
							className="  mt-6 inline-flex rounded border-2 border-[#5267df] bg-[#5267df] px-5 py-3 text-sm font-medium text-white shadow-md hover:bg-white hover:text-[#5267df]"
							href="#extensions"
						>
							More Info
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
