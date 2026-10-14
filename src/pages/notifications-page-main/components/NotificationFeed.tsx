import { useState } from "react";
import { DATA_INITIAL_NOTIFICATIONS } from "../../../constants/data";
import type { NotificationItem as NotificationData } from "../../../global/interfaces";
import { Header } from "../layouts";
import { NotificationCard } from "./NotificationCard";

export const NotificationFeed = () => {
	const [notifications, setNotifications] = useState<NotificationData[]>(DATA_INITIAL_NOTIFICATIONS);
	const unreadCount = notifications.filter((item) => item.unread).length;

	const toggleRead = (id: number) => {
		setNotifications((items) =>
			items.map((item) =>
				item.id === id ? { ...item, unread: !item.unread } : item,
			),
		);
	};

	return (
		<>
			<Header
				unreadCount={unreadCount}
				onMarkAllRead={() =>
					setNotifications((items) =>
						items.map((item) => ({ ...item, unread: false })),
					)
				}
			/>
			<div className="flex flex-col gap-[9px]">
				{notifications.map((notification) => (
					<NotificationCard
						notification={notification}
						onToggle={toggleRead}
						key={notification.id}
					/>
				))}
			</div>
		</>
	);
};
