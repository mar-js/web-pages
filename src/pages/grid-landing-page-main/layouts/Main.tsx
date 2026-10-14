import type { JSX, PropsWithChildren } from "react";

export const Main = ({ children }: PropsWithChildren): JSX.Element => (
	<main className="grid-main flex-1 lg:grid lg:grid-cols-[45%_55%]" id="about">{children}</main>
);
