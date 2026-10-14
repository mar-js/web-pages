import type { JSX } from "react";
import {
	ASSET_ROOT_SPACE_TOURISM,
	DATA_SPACE_CREW,
} from "../../../constants/data";
import { Section } from "../layouts";

interface CrewProps {
	crewIndex: number;
	onCrewChange: (index: number) => void;
}

export const Crew = ({ crewIndex, onCrewChange }: CrewProps): JSX.Element => {
	const crewMember = DATA_SPACE_CREW[crewIndex];

	return (
		<Section className="mx-auto max-w-[1110px] px-6 pt-8 md:px-10 md:pt-12">
			<h1 className="font-['Barlow_Condensed',sans-serif] text-base uppercase tracking-[0.17em] md:text-xl">
				<span className="mr-5 font-bold text-white/25">02</span> Meet your crew
			</h1>
			<div className="mt-8 grid items-center gap-8 text-center md:mt-16 md:gap-10 xl:min-h-[calc(100vh-14rem)] xl:grid-cols-[1fr_1fr] xl:gap-0 xl:text-left">
				<section className="order-2 flex flex-col items-center xl:order-1 xl:items-start xl:pb-24">
					<div className="order-2 flex gap-4 md:order-1 md:mb-8">
						{DATA_SPACE_CREW.map((item, index) => (
							<button
								type="button"
								key={item.name}
								onClick={() => onCrewChange(index)}
								aria-label={`Show ${item.name}`}
								aria-current={index === crewIndex}
								className={`h-[10px] w-[10px] rounded-full transition-colors ${index === crewIndex ? "bg-white" : "bg-white/20 hover:bg-white/50"}`}
							/>
						))}
					</div>
					<p className="order-1 mt-8 font-['Bellefair',serif] text-base uppercase text-white/50 md:order-2 md:mt-0 md:text-2xl">
						{crewMember.role}
					</p>
					<h2 className="order-1 mt-2 font-['Bellefair',serif] text-2xl uppercase sm:text-[2.5rem] md:order-3 md:mt-4">
						{crewMember.name}
					</h2>
					<p className="order-3 mt-4 max-w-[445px] font-['Barlow',sans-serif] text-[15px] leading-[1.7] text-[#d0d6f9] md:order-4 md:mt-6 md:text-base">
						{crewMember.bio}
					</p>
				</section>
				<img
					src={`${ASSET_ROOT_SPACE_TOURISM}/crew/${crewMember.image}`}
					alt={crewMember.name}
					className="order-1 mx-auto max-h-[42vh] w-auto max-w-full object-contain md:max-h-[52vh] xl:order-2 xl:max-h-[65vh] xl:self-end"
				/>
			</div>
		</Section>
	);
};
