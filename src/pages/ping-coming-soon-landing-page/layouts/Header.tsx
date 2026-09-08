import type { JSX, PropsWithChildren } from "react";

export const Header = ({ children }: PropsWithChildren): JSX.Element => (
	<header className="bg-transparent mb-8 text-center">{children}</header>
);
