import type { PropsWithChildren } from "react";

export const Main = ({ children }: PropsWithChildren) => (
	<main className="min-h-screen bg-white px-0 py-0 font-['Young_Serif',Georgia,serif] text-[#5f564d] sm:bg-[#f3e5d8] sm:px-6 sm:py-32">
		{children}
	</main>
);
