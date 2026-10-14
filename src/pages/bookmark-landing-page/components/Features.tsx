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
			className="bm-section px-0 py-16 text-center"
			id="features"
			aria-labelledby="bm-features-title"
		>
			<div className="bm-wrap">
				<div className="bm-section-intro">
					<h2 id="bm-features-title">Features</h2>
					<p>
						Our aim is to make it quick and easy for you to access your
						favourite websites. Your bookmarks sync between your devices so you
						can access them on the go.
					</p>
				</div>
				<div
					className="bm-feature-tabs mx-auto flex max-w-182.5 flex-col border-t border-[#d9dbe2] sm:flex-row sm:border-t-0 sm:border-b"
					role="tablist"
					aria-label="Bookmark features"
				>
					{DATA_BOOKMARK_FEATURES.map((item, index) => (
						<button
							className="bm-tab flex-1 cursor-pointer border-0 border-b border-[#d9dbe2] bg-transparent px-2.5 py-4.25 text-[15px] text-[#626575] hover:text-[#fa5757] aria-selected:border-b-4 aria-selected:border-[#fa5757] sm:border-b-4 sm:px-3 sm:py-4.5 sm:text-base"
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
					className="bm-feature mx-auto mt-12 grid min-h-90 grid-cols-1 items-center gap-12 text-left sm:mt-18 sm:grid-cols-2 sm:gap-22.5"
					id="bm-feature-panel"
					role="tabpanel"
					aria-labelledby={`bm-tab-${activeFeature}`}
				>
					<div className="bm-feature-art">
						<img
							src={`${ASSET_ROOT_BOOKMARK_LANDING_PAGE}/${feature.image}`}
							alt=""
						/>
					</div>
					<div className="bm-feature-copy max-w-111.25">
						<h3 className="mb-5 text-[26px] font-medium sm:text-[28px]">
							{feature.title}
						</h3>
						<p className="leading-[1.65] text-[#9194a1]">
							{feature.description}
						</p>
						<a
							className="bm-button bm-button-blue mt-6 inline-flex rounded border-2 border-[#5267df] bg-[#5267df] px-5 py-3 text-sm font-medium text-white shadow-md hover:bg-white hover:text-[#5267df]"
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
