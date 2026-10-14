import type { JSX } from "react";
import type { ShortenedLink } from "../../../global/interfaces";

interface LinkListProps {
	links: ShortenedLink[];
	copiedId: string | null;
	onCopy: (entry: ShortenedLink) => void;
	onRemove: (id: string) => void;
}

export const LinkList = ({
	links,
	copiedId,
	onCopy,
	onRemove,
}: LinkListProps): JSX.Element | null =>
	links.length > 0 ? (
		<ul className="mt-6 grid gap-4" aria-label="Your local preview links">
			{links.map((entry) => (
				<li
					key={entry.id}
					className="grid gap-3 rounded-md bg-white p-4 md:grid-cols-[minmax(0,1fr)_auto_auto] md:items-center md:gap-6 md:px-6"
				>
					<p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm text-[#35323e] md:text-base">
						{entry.original}
					</p>
					<div className="border-t border-[#e4e4e7] pt-3 text-sm text-[#2acfcf] md:border-0 md:pt-0 md:text-base">
						<span>{entry.short}</span>
						<span className="ml-2 text-xs text-[#9e9aa7]">(local preview)</span>
					</div>
					<div className="flex gap-2">
						<button
							type="button"
							onClick={() => onCopy(entry)}
							className={`min-h-10 flex-1 rounded-md px-5 text-sm font-bold text-white transition-colors md:min-w-24 ${copiedId === entry.id ? "bg-[#3b3054]" : "bg-[#2acfcf] hover:bg-[#9be3e2]"}`}
						>
							{copiedId === entry.id ? "Copied!" : "Copy"}
						</button>
						<button
							type="button"
							onClick={() => onRemove(entry.id)}
							aria-label={`Remove local link for ${entry.original}`}
							className="rounded-md px-3 text-sm font-semibold text-[#9e9aa7] transition-colors hover:bg-[#f0f1f6] hover:text-[#35323e]"
						>
							Remove
						</button>
					</div>
				</li>
			))}
		</ul>
	) : null;
