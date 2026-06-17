import type { JSX, PropsWithChildren } from "react";

export const Nav = ({ children }: PropsWithChildren): JSX.Element => (
	<nav>{children}</nav>
);
