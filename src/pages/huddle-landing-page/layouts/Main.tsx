import type { JSX, PropsWithChildren } from "react";

export const Main = ({ children }: PropsWithChildren): JSX.Element => (
	<main className="flex flex-wrap gap-20 mb-28">{children}</main>
);
