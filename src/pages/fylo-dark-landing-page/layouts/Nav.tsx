import type { JSX, PropsWithChildren } from "react";

export const Nav = ({ children }: PropsWithChildren): JSX.Element => (
	<nav className="flex flex-col md:flex-row gap-10">{children}</nav>
);
