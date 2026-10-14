import type { PropsWithChildren } from "react";

export const Main = ({ children }: PropsWithChildren) => (
	<main className="min-h-screen bg-[#f7fafd] px-5 py-0 text-[#1c202b] sm:py-16">
		{children}
	</main>
);
