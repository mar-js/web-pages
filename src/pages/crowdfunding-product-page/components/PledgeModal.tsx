import type { FormEvent, JSX } from "react";
import { ASSET_ROOT_CROWDFUNDING_PRODUCT_PAGE } from "../../../constants/data";
import type { CrowdfundingReward } from "../../../global/interfaces";
import { RewardCard } from "./RewardCard";

interface PledgeModalProps {
	showSuccess: boolean;
	selected: string | null;
	rewards: CrowdfundingReward[];
	pledge: string;
	pledgeError: string;
	onClose: () => void;
	onConfirm: (event: FormEvent<HTMLFormElement>) => void;
	onSelect: (rewardId: string | null) => void;
	onPledgeChange: (value: string) => void;
	onOpenPledge: (rewardId: string) => void;
}

export const PledgeModal = ({
	showSuccess,
	selected,
	rewards,
	pledge,
	pledgeError,
	onClose,
	onConfirm,
	onSelect,
	onPledgeChange,
	onOpenPledge,
}: PledgeModalProps): JSX.Element => (
	<div className="fixed inset-0 z-20 flex items-center justify-center overflow-y-auto bg-black/50 px-4 py-6 sm:py-10">
		<button className="absolute inset-0 h-full w-full cursor-default border-0 bg-transparent" type="button" aria-label="Close dialog" onClick={onClose} />
		<section className="relative z-10 my-auto max-h-[calc(100vh-3rem)] w-full max-w-[730px] overflow-y-auto rounded-lg bg-white p-6 md:max-h-[calc(100vh-5rem)] md:p-10" role="dialog" aria-modal="true" aria-labelledby="cf-modal-title">
			<button className="absolute right-6 top-6 border-0 bg-transparent p-1 opacity-60 hover:opacity-100 focus-visible:outline-2 focus-visible:outline-[#3cb4ac]" type="button" aria-label="Close dialog" onClick={onClose}>
				<img className="h-4 w-4" src={`${ASSET_ROOT_CROWDFUNDING_PRODUCT_PAGE}/icon-close-modal.svg`} alt="" />
			</button>
			{showSuccess ? (
				<div className="flex flex-col items-center py-8 text-center">
					<img className="mb-8 h-16 w-16" src={`${ASSET_ROOT_CROWDFUNDING_PRODUCT_PAGE}/icon-check.svg`} alt="" />
					<h2 className="mb-4 text-xl font-bold" id="cf-modal-title">Thanks for your support!</h2>
					<p className="mb-8 leading-[1.7] text-[#7a7a7a]">Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You’ll get an email from us when we begin shipping.</p>
					<button className="rounded-full border-0 bg-[#3cb4ac] px-7 py-4 font-bold text-white hover:bg-[#147b74] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#147b74]" type="button" onClick={onClose}>Got it!</button>
				</div>
			) : (
				<form onSubmit={onConfirm}>
					<h2 className="mb-4 text-xl font-bold" id="cf-modal-title">Back this project</h2>
					<p className="mb-6 leading-[1.6] text-[#7a7a7a]">Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
					<article className={`mb-6 grid grid-cols-[24px_minmax(0,1fr)] gap-x-4 rounded-lg border border-[#e6e6e6] bg-white px-5 py-6 md:px-7 ${selected === null ? "border-[#3cb4ac]" : ""}`}>
						<label className="row-span-2 flex cursor-pointer items-start pt-1">
							<input className="peer sr-only" type="radio" name="reward" checked={selected === null} onChange={() => onSelect(null)} />
							<span className={`mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-[#d9d9d9] before:h-2.5 before:w-2.5 before:rounded-full peer-focus-visible:ring-2 peer-focus-visible:ring-[#3cb4ac] ${selected === null ? "before:bg-[#3cb4ac]" : ""}`} aria-hidden="true" />
							<span className="sr-only">Pledge with no reward</span>
						</label>
						<div className="min-w-0">
							<h3 className="m-0 font-bold">Pledge with no reward</h3>
							<p className="mt-3 text-sm leading-[1.6] text-[#7a7a7a]">Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.</p>
						</div>
						{selected === null && (
							<div className="col-span-full mt-6 grid gap-4 border-t border-[#e6e6e6] pt-5 sm:grid-cols-[1fr_auto] sm:items-center">
								<p className="m-0 text-center text-sm text-[#7a7a7a] sm:text-left">Enter your pledge</p>
								<div className="flex justify-center gap-3">
									<label className="flex h-12 w-28 items-center rounded-full border border-[#e6e6e6] px-4 font-bold text-[#7a7a7a] focus-within:border-[#3cb4ac]">
										<span aria-hidden="true">$</span>
										<input className="min-w-0 w-full border-0 bg-transparent pl-1 text-sm font-bold text-black outline-none" type="number" min="1" value={pledge} onChange={(event) => onPledgeChange(event.target.value)} aria-label="Pledge amount" />
									</label>
									<button className="rounded-full border-0 bg-[#3cb4ac] px-6 text-sm font-bold text-white hover:bg-[#147b74] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#147b74]" type="submit">Continue</button>
								</div>
							</div>
						)}
					</article>
					{rewards.map((reward) => (
						<RewardCard
							key={reward.id}
							reward={reward}
							inModal
							selected={selected === reward.id}
							pledge={pledge}
							onSelect={() => onSelect(reward.id)}
							onOpenPledge={onOpenPledge}
							onPledgeChange={onPledgeChange}
						/>
					))}
					{pledgeError && <p className="text-sm font-medium text-red-600" role="alert">{pledgeError}</p>}
				</form>
			)}
		</section>
	</div>
);
