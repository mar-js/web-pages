import type { PropsWithChildren } from "react";

export const Main = ({ children }: PropsWithChildren) => (
	<main className="min-h-screen bg-white px-4 py-0 font-['Plus_Jakarta_Sans',Arial,sans-serif] text-[#1c202b] sm:bg-[#f7fafd] sm:px-0 sm:py-16">
		{children}
	</main>
);
