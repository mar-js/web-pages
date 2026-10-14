import type { JSX, PropsWithChildren } from "react";

export const Main = ({ children }: PropsWithChildren): JSX.Element => (
	<main className="flex flex-col items-center justify-center mb-28">
		{children}
	</main>
);
