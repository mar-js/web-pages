import { useEffect, useState, type FormEvent, type JSX } from "react";
import { DATA_CROWDFUNDING_REWARDS } from "../../../constants/data";
import type { CrowdfundingReward } from "../../../global/interfaces";
import { Main } from "../layouts";
import { FundingStats } from "./FundingStats";
import { PledgeModal } from "./PledgeModal";
import { ProjectDetails } from "./ProjectDetails";
import { ProjectIntro } from "./ProjectIntro";

export const Campaign = (): JSX.Element => {
	const [bookmarked, setBookmarked] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const [selected, setSelected] = useState<string | null>(null);
	const [pledge, setPledge] = useState("");
	const [pledgeError, setPledgeError] = useState("");
	const [showSuccess, setShowSuccess] = useState(false);
	const [total, setTotal] = useState(89914);
	const [backers, setBackers] = useState(5007);
	const [rewards, setRewards] = useState<CrowdfundingReward[]>(DATA_CROWDFUNDING_REWARDS);

	const closeModal = () => {
		setModalOpen(false);
		setShowSuccess(false);
		setPledgeError("");
	};

	useEffect(() => {
		if (!modalOpen) return;
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setModalOpen(false);
				setShowSuccess(false);
				setPledgeError("");
			}
		};
		document.addEventListener("keydown", onKeyDown);
		return () => document.removeEventListener("keydown", onKeyDown);
	}, [modalOpen]);

	const openPledge = (rewardId: string | null = null) => {
		setSelected(rewardId);
		const reward = rewards.find((item) => item.id === rewardId);
		setPledge(reward ? String(reward.minimum) : "");
		setPledgeError("");
		setShowSuccess(false);
		setModalOpen(true);
	};

	const selectReward = (rewardId: string | null) => {
		setSelected(rewardId);
		const reward = rewards.find((item) => item.id === rewardId);
		setPledge(reward ? String(reward.minimum) : "");
		setPledgeError("");
	};

	const confirmPledge = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const reward = rewards.find((item) => item.id === selected);
		const amount = Number(pledge);
		const minAmount = reward?.minimum ?? 1;
		if (!Number.isFinite(amount) || amount < minAmount) {
			setPledgeError(`Please enter a pledge of at least $${minAmount}.`);
			return;
		}
		setTotal((current) => current + amount);
		setBackers((current) => current + 1);
		if (reward) {
			setRewards((current) =>
				current.map((item) =>
					item.id === reward.id && item.remaining !== null
						? { ...item, remaining: Math.max(0, item.remaining - 1) }
						: item,
				),
			);
		}
		setShowSuccess(true);
	};

	const percent = Math.min(100, (total / 100000) * 100);

	return (
		<>
			<Main>
				<ProjectIntro
					bookmarked={bookmarked}
					onBookmark={() => setBookmarked((value) => !value)}
					onBackProject={() => openPledge()}
				/>
				<FundingStats total={total} backers={backers} percent={percent} />
				<ProjectDetails rewards={rewards} onOpenPledge={openPledge} />
			</Main>
			{modalOpen && (
				<PledgeModal
					showSuccess={showSuccess}
					selected={selected}
					rewards={rewards}
					pledge={pledge}
					pledgeError={pledgeError}
					onClose={closeModal}
					onConfirm={confirmPledge}
					onSelect={selectReward}
					onPledgeChange={(value) => { setPledge(value); setPledgeError(""); }}
					onOpenPledge={openPledge}
				/>
			)}
		</>
	);
};
