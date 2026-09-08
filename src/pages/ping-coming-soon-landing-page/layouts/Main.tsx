import type { JSX, PropsWithChildren } from "react";

export const Main = ({ children }: PropsWithChildren): JSX.Element => (
	<main className="flex flex-col items-center justify-center gap-10">
		{children}
	</main>
);
