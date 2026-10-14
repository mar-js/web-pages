import { ASSET_ROOT_NOTIFICATIONS } from "../../../constants/data";
import type { NotificationItem } from "../../../global/interfaces";

interface NotificationCardProps {
	notification: NotificationItem;
	onToggle: (id: number) => void;
}

export const NotificationCard = ({ notification, onToggle }: NotificationCardProps) => (
	<article
		className={`rounded-lg px-4 py-4 sm:px-[18px] ${notification.unread ? "bg-[#f7fafd]" : ""}`}
	>
		<button
			type="button"
			className="flex w-full cursor-pointer items-start gap-3 border-0 bg-transparent p-0 text-left text-inherit focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-[#0a317b] focus-visible:outline-offset-1 sm:gap-[18px]"
			onClick={() => onToggle(notification.id)}
			aria-label={`${notification.name} ${notification.action}${notification.target ? ` ${notification.target}` : ""}. ${notification.time}${notification.unread ? ", unread" : ""}`}
		>
			<img
				className="h-10 w-10 flex-none rounded-full object-cover sm:h-[45px] sm:w-[45px]"
				src={`${ASSET_ROOT_NOTIFICATIONS}/${notification.avatar}`}
				alt=""
			/>
			<span className="block min-w-0 flex-1">
				<span className="block leading-[1.45] text-[#5e6778] sm:leading-[1.5]">
					<strong className="font-extrabold text-[#1c202b]">{notification.name}</strong>{" "}
					<span>{notification.action}</span>
					{notification.target && (
						<>
							{" "}
							<strong className={notification.target === "Chess Club" ? "font-extrabold text-[#0a317b]" : "font-extrabold text-[#5e6778] hover:text-[#0a317b]"}>
								{notification.target}
							</strong>
						</>
					)}
					{notification.unread && (
						<span className="ml-1.5 inline-block h-2 w-2 rounded-full bg-[#f65351] align-[1px]" aria-hidden="true" />
					)}
				</span>
				<span className="mt-0.5 block leading-[1.4] text-[#939dae]">{notification.time}</span>
			</span>
			{notification.picture && (
				<img
					className="ml-px h-10 w-10 flex-none rounded-lg border border-transparent object-cover hover:border-[#d7e3ec] sm:ml-1.5 sm:h-[45px] sm:w-[45px]"
					src={`${ASSET_ROOT_NOTIFICATIONS}/${notification.picture}`}
					alt="A chess match"
				/>
			)}
		</button>
		{notification.message && (
			<p className="ml-[52px] mt-3 rounded-[5px] border border-[#d5e0e8] p-3.5 leading-[1.45] text-[#5e6778] hover:bg-[#e5effa] sm:ml-[63px] sm:p-4 sm:leading-normal">
				{notification.message}
			</p>
		)}
	</article>
);
