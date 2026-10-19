import type { JSX, PropsWithChildren } from "react";

export const Header = ({ children }: PropsWithChildren): JSX.Element => (
	<header className="absolute inset-x-0 top-0 z-10 text-white">{children}</header>
);
