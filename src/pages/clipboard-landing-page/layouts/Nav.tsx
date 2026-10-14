import type { JSX, PropsWithChildren } from "react";

export const Nav = ({ children }: PropsWithChildren): JSX.Element => (
	<nav className="flex flex-col md:flex-row gap-6 md:gap-20">{children}</nav>
);
