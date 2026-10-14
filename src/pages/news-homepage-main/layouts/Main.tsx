import type { PropsWithChildren } from "react";

export const Main = ({ children }: PropsWithChildren) => (
	<main className="news-main grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]" id="top">
		{children}
	</main>
);
