import type { FormEvent, JSX } from "react";

interface LinkFormProps {
	url: string;
	error: string;
	onUrlChange: (url: string) => void;
	onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export const LinkForm = ({
	url,
	error,
	onUrlChange,
	onSubmit,
}: LinkFormProps): JSX.Element => (
	<form
		onSubmit={onSubmit}
		className="grid gap-4 rounded-[10px] bg-[url('/assets/url-shortening-api-master/bg-shorten-desktop.svg')] bg-[#3b3054] bg-cover bg-right px-6 py-6 md:grid-cols-[1fr_auto] md:gap-6 md:px-14 md:py-12 max-md:bg-[url('/assets/url-shortening-api-master/bg-shorten-mobile.svg')]"
	>
		<div>
			<label htmlFor="short-url" className="sr-only">
				Enter a URL to create a local preview link
			</label>
			<input
				id="short-url"
				type="text"
				inputMode="url"
				value={url}
				onChange={(event) => onUrlChange(event.target.value)}
				placeholder="Shorten a link here..."
				aria-invalid={Boolean(error)}
				aria-describedby={error ? "url-error" : undefined}
				className={`h-[52px] w-full rounded-md border-2 bg-white px-4 text-sm outline-none placeholder:text-[#9e9aa7] focus:border-[#2acfcf] md:h-14 md:px-7 md:text-base ${error ? "border-[#f46262]" : "border-transparent"}`}
			/>
			{error && (
				<p
					id="url-error"
					role="alert"
					className="mt-1 text-xs italic text-[#f46262] md:absolute"
				>
					{error}
				</p>
			)}
		</div>
		<button
			type="submit"
			className="h-[52px] rounded-md bg-[#2acfcf] px-8 font-bold text-white transition-colors hover:bg-[#9be3e2] md:h-14"
		>
			Shorten It!
		</button>
	</form>
);
