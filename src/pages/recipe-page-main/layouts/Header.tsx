import type { PropsWithChildren } from "react";

export const Header = ({ children }: PropsWithChildren) => (
	<header className="mb-8">{children}</header>
);
