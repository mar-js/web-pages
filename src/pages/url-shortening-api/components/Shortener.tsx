import type { FormEvent, JSX } from "react";
import { useEffect, useState } from "react";
import type { ShortenedLink } from "../../../global/interfaces";
import { LinkForm } from "./LinkForm";
import { LinkList } from "./LinkList";

function readSavedLinks(): ShortenedLink[] {
	try {
		const saved = window.localStorage.getItem("shortly-local-links");
		return saved ? (JSON.parse(saved) as ShortenedLink[]) : [];
	} catch {
		return [];
	}
}

export const Shortener = (): JSX.Element => {
	const [url, setUrl] = useState("");
	const [error, setError] = useState("");
	const [links, setLinks] = useState<ShortenedLink[]>(readSavedLinks);
	const [copiedId, setCopiedId] = useState<string | null>(null);

	useEffect(() => {
		window.localStorage.setItem("shortly-local-links", JSON.stringify(links));
	}, [links]);

	const addLink = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const value = url.trim();
		if (!value) {
			setError("Please add a link");
			return;
		}
		let normalizedUrl: URL;
		try {
			normalizedUrl = new URL(
				/^[a-z][a-z\d+.-]*:/i.test(value) ? value : `https://${value}`,
			);
		} catch {
			setError("Please enter a valid URL");
			return;
		}
		if (!["http:", "https:"].includes(normalizedUrl.protocol)) {
			setError("Please enter a valid URL");
			return;
		}
		const id = Math.random().toString(36).slice(2, 8);
		const entry = {
			id,
			original: normalizedUrl.href,
			short: `short.local/${id}`,
		};
		setLinks((current) => [entry, ...current]);
		setUrl("");
		setError("");
	};

	const copyLink = async (entry: ShortenedLink) => {
		try {
			await navigator.clipboard.writeText(entry.short);
			setCopiedId(entry.id);
			window.setTimeout(() => setCopiedId(null), 1800);
		} catch {
			setCopiedId(null);
			setError("Clipboard access isn’t available in this browser.");
		}
	};

	const removeLink = (id: string) => {
		setLinks((current) => current.filter((entry) => entry.id !== id));
		if (copiedId === id) setCopiedId(null);
	};

	return (
		<div className="mx-auto -mt-20 max-w-[1110px] md:-mt-24">
			<LinkForm
				url={url}
				error={error}
				onUrlChange={(nextUrl) => {
					setUrl(nextUrl);
					if (error) setError("");
				}}
				onSubmit={addLink}
			/>
			<p className="mt-3 text-xs text-[#6b6675]">
				This demo creates a local preview link only. It does not call a shortening
				service or create a working redirect.
			</p>
			<LinkList
				links={links}
				copiedId={copiedId}
				onCopy={copyLink}
				onRemove={removeLink}
			/>
		</div>
	);
};
