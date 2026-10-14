import type { JSX } from "react";
import type { CrowdfundingReward } from "../../../global/interfaces";

interface RewardCardProps {
	reward: CrowdfundingReward;
	inModal?: boolean;
	selected: boolean;
	pledge?: string;
	onSelect?: () => void;
	onOpenPledge: (rewardId: string) => void;
	onPledgeChange?: (value: string) => void;
}

export const RewardCard = ({
	reward,
	inModal = false,
	selected,
	pledge,
	onSelect,
	onOpenPledge,
	onPledgeChange,
}: RewardCardProps): JSX.Element => {
	const soldOut = reward.remaining === 0;

	return (
		<article
			className={`mb-6 rounded-lg border border-[#e6e6e6] bg-white px-[17px] py-5 md:px-10 md:py-7 ${inModal ? "grid grid-cols-[24px_minmax(0,1fr)] gap-x-4" : ""} ${soldOut ? "opacity-50" : ""} ${inModal && selected ? "border-[#3cb4ac]" : ""}`}
			key={`${inModal ? "modal-" : ""}${reward.id}`}
		>
			{inModal && (
				<label className="row-span-2 flex cursor-pointer items-start pt-1">
					<input className="peer sr-only" type="radio" name="reward" checked={selected} disabled={soldOut} onChange={onSelect} />
					<span className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-[#d9d9d9] before:h-2.5 before:w-2.5 before:rounded-full peer-focus-visible:ring-2 peer-focus-visible:ring-[#3cb4ac] ${selected ? "before:bg-[#3cb4ac]" : ""}`} aria-hidden="true" />
					<span className="sr-only">Select {reward.title}</span>
				</label>
			)}
			<div className="min-w-0">
			<div className="flex flex-wrap items-center justify-between gap-2">
					<h3 className="m-0 font-bold">{reward.title}</h3>
					<p className="m-0 text-sm font-bold text-[#3cb4ac]">Pledge ${reward.minimum} or more</p>
					{inModal && reward.remaining !== null && (
						<span className="text-sm text-[#7a7a7a]"><strong className="mr-1 text-lg text-black">{reward.remaining}</strong> left</span>
					)}
				</div>
				<p className="mt-4 leading-[1.7] text-[#7a7a7a]">{reward.description}</p>
				{!inModal && (
					<div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
						{reward.remaining !== null && <p className=" text-sm text-[#7a7a7a]"><strong className="text-2xl text-black">{reward.remaining}</strong> left</p>}
						<button
							className="rounded-full border-0 bg-[#3cb4ac] px-7 py-4 font-bold text-white hover:bg-[#147b74] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#147b74] disabled:cursor-not-allowed disabled:bg-[#b1b1b1]"
							type="button"
							disabled={soldOut}
							onClick={() => onOpenPledge(reward.id)}
						>
							{soldOut ? "Out of stock" : "Select Reward"}
						</button>
					</div>
				)}
			</div>
			{inModal && selected && !soldOut && (
				<div className="col-span-full mt-6 grid gap-4 border-t border-[#e6e6e6] pt-5 sm:grid-cols-[1fr_auto] sm:items-center">
					<p className="m-0 text-center text-sm text-[#7a7a7a] sm:text-left">Enter your pledge</p>
					<div className=" flex justify-center gap-3">
						<label className=" flex h-12 w-28 items-center rounded-full border border-[#e6e6e6] px-4 font-bold text-[#7a7a7a] focus-within:border-[#3cb4ac]">
							<span aria-hidden="true">$</span>
							<input
								type="number"
								min={reward.minimum}
								value={pledge}
								onChange={(event) => onPledgeChange?.(event.target.value)}
								aria-label={`Pledge amount for ${reward.title}`}
								className="min-w-0 w-full border-0 bg-transparent pl-1 text-sm font-bold text-black outline-none"
							/>
						</label>
						<button className=" rounded-full border-0 bg-[#3cb4ac] px-6 text-sm font-bold text-white hover:bg-[#147b74]" type="submit">Continue</button>
					</div>
				</div>
			)}
		</article>
	);
};
