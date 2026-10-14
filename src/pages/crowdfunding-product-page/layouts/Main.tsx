import type { JSX, PropsWithChildren } from "react";

export const Main = ({ children }: PropsWithChildren): JSX.Element => (
	<main className="cf-page-content relative z-[2] mx-auto mb-[90px] mt-[-95px] w-[calc(100%_-_48px)] max-w-[680px]" id="top">
		{children}
	</main>
);
