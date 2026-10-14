import type { JSX } from "react";
import {
	ASSET_ROOT_SPACE_TOURISM,
	DATA_SPACE_DESTINATIONS,
} from "../../../constants/data";
import { Section } from "../layouts";

interface DestinationProps {
	destinationIndex: number;
	onDestinationChange: (index: number) => void;
}

export const Destination = ({
	destinationIndex,
	onDestinationChange,
}: DestinationProps): JSX.Element => {
	const destination = DATA_SPACE_DESTINATIONS[destinationIndex];

	return (
		<Section className="mx-auto max-w-[1110px] px-6 pb-16 pt-8 md:px-10 md:pt-12 xl:pt-12">
			<h1 className="font-['Barlow_Condensed',sans-serif] text-base uppercase tracking-[0.17em] md:text-xl">
				<span className="mr-5 font-bold text-white/25">01</span> Pick your destination
			</h1>
			<div className="mt-8 grid items-center gap-10 text-center md:mt-14 md:gap-12 xl:grid-cols-2 xl:gap-24 xl:pl-16 xl:pt-8">
				<img
					src={`${ASSET_ROOT_SPACE_TOURISM}/destination/${destination.image}`}
					alt={destination.name}
					className="mx-auto w-[clamp(170px,36vw,445px)]"
				/>
				<section className="mx-auto max-w-[445px]">
					<div className="flex justify-center gap-7 font-['Barlow_Condensed',sans-serif] text-sm uppercase tracking-[0.17em] md:gap-9">
						{DATA_SPACE_DESTINATIONS.map((item, index) => (
							<button
								type="button"
								key={item.name}
								onClick={() => onDestinationChange(index)}
								className={`border-b-[3px] py-3 transition-colors ${index === destinationIndex ? "border-white text-white" : "border-transparent text-[#d0d6f9] hover:border-white/50"}`}
							>
								{item.name}
							</button>
						))}
					</div>
					<h2 className="mt-5 font-['Bellefair',serif] text-[3.5rem] uppercase md:mt-8 md:text-[5rem]">
						{destination.name}
					</h2>
					<p className="border-b border-[#383b4b] pb-8 font-['Barlow',sans-serif] text-[15px] leading-[1.7] text-[#d0d6f9] md:pb-12 md:text-base">
						{destination.description}
					</p>
					<div className="grid gap-8 pt-8 sm:grid-cols-2 md:pt-7">
						<div>
							<p className="font-['Barlow_Condensed',sans-serif] text-sm uppercase tracking-[0.15em] text-[#d0d6f9]">
								Avg. distance
							</p>
							<p className="mt-3 font-['Bellefair',serif] text-[1.75rem] uppercase">
								{destination.distance}
							</p>
						</div>
						<div>
							<p className="font-['Barlow_Condensed',sans-serif] text-sm uppercase tracking-[0.15em] text-[#d0d6f9]">
								Est. travel time
							</p>
							<p className="mt-3 font-['Bellefair',serif] text-[1.75rem] uppercase">
								{destination.travel}
							</p>
						</div>
					</div>
				</section>
			</div>
		</Section>
	);
};
