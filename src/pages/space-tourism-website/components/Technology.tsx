import type { JSX } from "react";
import {
	ASSET_ROOT_SPACE_TOURISM,
	DATA_SPACE_TECHNOLOGY,
} from "../../../constants/data";
import { Section } from "../layouts";

interface TechnologyProps {
	technologyIndex: number;
	onTechnologyChange: (index: number) => void;
}

export const Technology = ({
	technologyIndex,
	onTechnologyChange,
}: TechnologyProps): JSX.Element => {
	const tech = DATA_SPACE_TECHNOLOGY[technologyIndex];

	return (
		<Section className="mx-auto max-w-[1275px] pt-8 md:pt-12 xl:pl-10">
			<h1 className="px-6 font-['Barlow_Condensed',sans-serif] text-base uppercase tracking-[0.17em] md:px-10 md:text-xl xl:px-0">
				<span className="mr-5 font-bold text-white/25">03</span> Space launch 101
			</h1>
			<div className="mt-8 grid items-center gap-8 text-center xl:mt-6 xl:grid-cols-[1fr_515px] xl:gap-14 xl:text-left">
				<div className="order-2 flex flex-col items-center gap-7 px-6 md:gap-10 xl:order-1 xl:flex-row xl:items-start xl:px-0">
					<div className="flex gap-4 xl:flex-col">
						{DATA_SPACE_TECHNOLOGY.map((item, index) => (
							<button
								type="button"
								key={item.name}
								onClick={() => onTechnologyChange(index)}
								aria-label={`Show ${item.name}`}
								aria-current={index === technologyIndex}
								className={`h-10 w-10 rounded-full border text-base font-['Bellefair',serif] transition-colors md:h-[60px] md:w-[60px] md:text-2xl ${index === technologyIndex ? "border-white bg-white text-[#0b0d17]" : "border-white/25 text-white hover:border-white"}`}
							>
								{index + 1}
							</button>
						))}
					</div>
					<section className="max-w-[470px]">
						<p className="font-['Barlow_Condensed',sans-serif] text-sm uppercase tracking-[0.17em] text-[#d0d6f9]">
							The terminology...
						</p>
						<h2 className="mt-2 font-['Bellefair',serif] text-2xl uppercase md:mt-4 md:text-[2.5rem]">
							{tech.name}
						</h2>
						<p className="mt-4 font-['Barlow',sans-serif] text-[15px] leading-[1.7] text-[#d0d6f9] md:text-base">
							{tech.description}
						</p>
					</section>
				</div>
				<picture className="order-1 block w-full xl:order-2">
					<source
						media="(min-width: 1200px)"
						srcSet={`${ASSET_ROOT_SPACE_TOURISM}/technology/${tech.image}-portrait.jpg`}
					/>
					<img
						src={`${ASSET_ROOT_SPACE_TOURISM}/technology/${tech.image}-landscape.jpg`}
						alt={tech.name}
						className="h-[170px] w-full object-cover md:h-[310px] xl:h-[527px] xl:w-full xl:object-contain"
					/>
				</picture>
			</div>
		</Section>
	);
};
