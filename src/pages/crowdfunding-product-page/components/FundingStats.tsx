import type { JSX } from "react";

const formatMoney = (amount: number) =>
	new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(amount);

interface FundingStatsProps {
	total: number;
	backers: number;
	percent: number;
}

export const FundingStats = ({ total, backers, percent }: FundingStatsProps): JSX.Element => (
	<section className="mb-6 rounded-[9px] border border-[#f0f0f0] bg-white px-6 py-10 md:px-11" aria-label="Project funding progress">
	<div className="grid gap-5 md:grid-cols-3 md:gap-0">
		<div className="flex flex-col gap-1 border-b border-[#e6e6e6] pb-5 text-center md:border-b-0 md:border-r md:pb-0 md:text-left md:first:pl-0 md:pl-8"><strong className="text-3xl">${formatMoney(total)}</strong><span className="text-sm text-[#7a7a7a]">of $100,000 backed</span></div>
		<div className="flex flex-col gap-1 border-b border-[#e6e6e6] pb-5 text-center md:border-b-0 md:border-r md:pl-8 md:text-left"><strong className="text-3xl">{formatMoney(backers)}</strong><span className="text-sm text-[#7a7a7a]">total backers</span></div>
		<div className="flex flex-col gap-1 text-center md:pl-8 md:text-left"><strong className="text-3xl">56</strong><span className="text-sm text-[#7a7a7a]">days left</span></div>
		</div>
		<svg
			className="mt-8 h-2 w-full overflow-hidden rounded-full"
			viewBox="0 0 100 8"
			preserveAspectRatio="none"
			role="progressbar"
			aria-label="Funding goal progress"
			aria-valuemin={0}
			aria-valuemax={100}
			aria-valuenow={Math.round(percent)}
		>
			<rect width="100" height="8" rx="4" fill="#f4f4f4" />
			<rect width={percent} height="8" rx="4" fill="#3cb4ac" />
		</svg>
	</section>
);
