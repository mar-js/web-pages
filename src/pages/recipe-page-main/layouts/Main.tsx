import type { PropsWithChildren } from "react";

export const Main = ({ children }: PropsWithChildren) => (
	<main className="recipe-page min-h-screen bg-[#f3e5d8] px-0 py-0 font-['Young_Serif',Georgia,serif] text-[#5f564d] sm:px-6 sm:py-32">
		{children}
	</main>
);
