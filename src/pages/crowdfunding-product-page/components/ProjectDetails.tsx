import type { JSX } from "react";
import type { CrowdfundingReward } from "../../../global/interfaces";
import { RewardCard } from "./RewardCard";

interface ProjectDetailsProps {
	rewards: CrowdfundingReward[];
	onOpenPledge: (rewardId: string) => void;
}

export const ProjectDetails = ({ rewards, onOpenPledge }: ProjectDetailsProps): JSX.Element => (
	<section className="  rounded-lg bg-white px-6 py-8 shadow-sm md:px-11 md:py-10" id="about" aria-labelledby="cf-about-title">
		<h2 className="mb-6 text-xl font-bold" id="cf-about-title">About this project</h2>
		<p className="mb-6 leading-[1.7] text-[#7a7a7a]">The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.</p>
		<p className="mb-6 leading-[1.7] text-[#7a7a7a]">Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.</p>
		<div id="rewards">{rewards.map((reward) => (
			<RewardCard
				key={reward.id}
				reward={reward}
				selected={false}
				onOpenPledge={onOpenPledge}
			/>
		))}</div>
	</section>
);
