import type { JSX, PropsWithChildren } from "react";

export const Main = ({ children }: PropsWithChildren): JSX.Element => (
	<main className="relative z-[2] mx-auto mb-[90px] mt-[-120px] w-[calc(100%_-_36px)] max-w-[680px] md:w-[calc(100%_-_48px)]" id="top">
		{children}
	</main>
);
