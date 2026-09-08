import type { JSX } from "react";

export const Form = (): JSX.Element => (
	<form className="flex flex-col gap-2">
		<input
			className="min-w-96 border border-ping-coming-soon-blue-200 text-ping-coming-soon-blue-200 px-6 py-3 rounded-full text-sm shadow"
			type="email"
			placeholder="Your email address"
		/>
		<button
			className="min-w-96 border border-ping-coming-soon-blue-500 bg-ping-coming-soon-blue-500 text-white px-6 py-3 rounded-full text-sm shadow"
			type="submit"
		>
			Notify Me
		</button>
	</form>
);
