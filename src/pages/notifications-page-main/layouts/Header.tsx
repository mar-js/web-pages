interface HeaderProps {
	unreadCount: number;
	onMarkAllRead: () => void;
}

export const Header = ({ unreadCount, onMarkAllRead }: HeaderProps) => (
	<header className="mb-6 flex items-center justify-between sm:mb-7">
		<div className="flex items-center gap-2.5">
			<h1 className="m-0 text-xl font-extrabold leading-[1.3] sm:text-2xl" id="notifications-title">Notifications</h1>
			<span className="min-w-8 rounded-md bg-[#0a317b] px-[9px] pb-[3px] pt-px text-center text-base font-extrabold text-white" aria-live="polite" aria-atomic="true">
				{unreadCount}
			</span>
		</div>
		<button
			type="button"
			className="cursor-pointer border-0 bg-transparent py-1.5 pl-2 text-sm text-[#5e6778] hover:text-[#0a317b] focus-visible:text-[#0a317b] sm:text-base"
			onClick={onMarkAllRead}
		>
			Mark all as read
		</button>
	</header>
);
